import React from 'react';

const YoutubeEmbed: React.FC<{ embedId: string }> = ({embedId}) => (
  <div className="ratio ratio-16x9">
    <iframe src={`https://www.youtube.com/embed/${embedId}`} title="YouTube video"
      allowFullScreen></iframe>
  </div>
);

export default YoutubeEmbed;
