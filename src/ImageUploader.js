import { Button } from "@mui/material";
import React, { useState } from "react";
import ImageLogo from "./image.svg";
import "./ImageUpload.css";
import storage from "./firebase";
import { ref, uploadBytes, uploadBytesResumable } from "firebase/storage";

const ImageUploader = () => {
  const [loading, setLoading] = useState(false); //ローディングをするかしないかを判断するための変数
  const [isUploaded, setUploaded] = useState(false); //アップロードが完了したかどうかを判断するための変数
  //Firebaseにファイルをアップロードする際に使う関数
  const OnFileUploadToFirebase = (e) => {
    //選択したファイル名を出力する文
    //console.log(e.target.files[0].name);

    //fileAPI配列の0番目にあるファイル名を取得してfileに格納
    const file = e.target.files[0];
    //17~20行目はFirebaseの公式ドキュメントから引用
    //FirebaeStorageのimageフォルダ名の中にアップしたファイルの名前で保存するようにしている
    const storaqgeRef = ref(storage, "image/" + file.name);

    //ファイルのアップロードが完了したら"Uploaded a blob or file!"を表示
    // uploadBytes(storaqgeRef, file).then((snapshot) => {
    //  console.log("Uploaded a blob or file!");
    //  });  

    //アップロードの進捗状況をモニタリングする関数を使用 Firebase公式にも書いてある
    const uploadImage = uploadBytesResumable(storaqgeRef, file); //fileはfileAPIのこと

    uploadImage.on("state_changed", (snapshot) => {
      setLoading(true); //画像のアップロード開始されたらローディングを表示する
    },
      (err) => {
        console.log(err);
      },
      () => {
        setLoading(false); //アップロードが完了したのでローディングを終了する
        setUploaded(true);  //アップロードが完了したことを通知する
      }
    );
  };
  return (
    <>
      {loading ? (
        <h2>アップロード中・・・</h2>
      ) : (
        <>
          {isUploaded ? (
            <h2>アップロード完了しました！</h2>

          ) : (
            <div className="outerBox">
              <div className="title">
                <h2>画像アップローダー</h2>
                <p>JpegかPngの画像ファイル</p>
              </div>
              <div className="imageUplodeBox">
                <div className="imageLogoAndText">
                  <img src={ImageLogo} alt="imagelogo" />
                  <p>ここにドラッグ＆ドロップしてね</p>
                </div>
                <input className="imageUploadInput" multiple name="imageURL" type="file" accept=".png, jpeg, .jpg" onChange={OnFileUploadToFirebase} />
              </div>
              <p>または</p>
              <Button variant="contained">
                ファイルを選択
                <input className="imageUploadInput" type="file" accept=".png, jpeg, .jpg" onChange={OnFileUploadToFirebase} />
              </Button>
            </div>
          )}
        </>
      )}
    </>

  );
};

export default ImageUploader;
