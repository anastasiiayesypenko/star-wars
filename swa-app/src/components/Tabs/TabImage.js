import React, { useState, useEffect } from "react";
import { Spin } from "antd";

import imagesAxiosInstance from "../../axiosInstance/imagesAxiosInstance";
import { imageWrapper, tabImage } from "./Tabs.module.scss";

const TabImage = ({ query }) => {
  const [imageSrc, setImageSrc] = useState(undefined);
  const [imageSrcLoading, setImageSrcLoading] = useState(true);

  const handleError = () => {
    setImageSrcLoading(false);
    setImageSrc(
      "https://img5.goodfon.com/wallpaper/nbig/d/a7/darth-vader-star-wars-sith-helmet-simple-background-digital.jpg"
    );
  };

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      setImageSrcLoading(true);
      imagesAxiosInstance({ params: { query } })
        .then((response) => {
          setImageSrcLoading(false);
          setImageSrc(
            response.data.results &&
              response.data.results[0] &&
              response.data.results[0].urls.regular
          );
        })
        .catch(() => handleError());
    }
    return () => (isSubscribed = false);
  }, [query]);

  return (
    <div className={imageWrapper}>
      {imageSrcLoading ? (
        <Spin size="large" />
      ) : (
        <img
          className={tabImage}
          src={
            imageSrc ||
            "https://img5.goodfon.com/wallpaper/nbig/d/a7/darth-vader-star-wars-sith-helmet-simple-background-digital.jpg"
          }
          onError={handleError}
          alt="star wars"
        />
      )}
    </div>
  );
};

export default TabImage;
