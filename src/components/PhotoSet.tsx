import React from "react"
export default function PhotoSet({ photoLabel, photoUrl, pictureNotIsNotLoad }: { photoLabel: string, photoUrl: string, pictureNotIsNotLoad: string }) {
  return (
    <main>
      <div className="picture_container">
        <span className="pic_label">{photoLabel}</span>
        <img src={photoUrl} alt={pictureNotIsNotLoad} className="config_Pic" />
      </div>
    </main >
  );
}