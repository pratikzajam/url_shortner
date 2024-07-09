import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Url } from "../model/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import crypto from "crypto";
// import { url } from "inspector";

const createShortUrl = asyncHandler(async (req, res) => {
  

  const { longurl } = req.body;

 if (!longurl) {
    throw new ApiError(400, "longurl is required");
  }

  const fullUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;

  const longurlExists = await Url.findOne({ longurl: longurl });

 const existedshorturl= longurlExists.shorturl;

 var existedshorturlfull=`${fullUrl}${existedshorturl}`;
  
  console.log(existedshorturlfull);

  if (longurlExists) {
    return res
    .status(200)
  
    .json(
      new ApiResponse(
        200,
        {
          shorturl:existedshorturlfull
        },
        "short url allready exists in the system"
      )
    );
  }

  if (longurlExists) {
    throw new ApiError(400, "Something went wrong");
  }

  
  console.log('Full URL of the server:', fullUrl);

const shorturl = crypto.randomBytes(4).toString('hex'); // Generates an 8-character string
 

 const fullShortUrl = `${fullUrl}${shorturl}`;

// console.log(fullShortUrl);



  
  const newUrl = new Url({
    longurl: longurl,
    shorturl: shorturl, 
  });

  await newUrl.save();

 if(!newUrl)
  {
    throw new ApiError(400, "Something went wrong");
 }

 return res
    .status(200)
  
    .json(
      new ApiResponse(
        200,
        {
          short_url: fullShortUrl,
     
        },
        "short url generated sucessfully"
      )
    );

});


const geturl = asyncHandler(async (req, res) => {
  
  // http://localhost:8000/467f1ae0

  const { urlid } = req.params;

  console.log(urlid);



  if(!urlid)
  {
    throw new ApiError(400, "shorturl is required");
  }

 const isurlexists=await Url.findOne({shorturl:urlid});

  console.log(isurlexists);

  if(!isurlexists)
  {
    throw new ApiError(400, "something went wrong");
  }

 const longurl=isurlexists.longurl;

 return res.redirect(longurl);

});

export {createShortUrl,geturl};