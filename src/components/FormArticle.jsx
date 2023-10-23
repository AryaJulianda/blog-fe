import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux";

const FormArticle = ({submitAction,edit}) => {
  const {article} = useSelector((s)=>s.article)
  const [articleData, setArticleData] = useState({
    title: '',
    img: undefined,
    content: '',
    authorName:''
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setArticleData({ ...articleData, [id]: value });
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setArticleData({ ...articleData, img: imageFile });
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append('title', articleData.title);
    formData.append('authorName', articleData.authorName);
    articleData.img && formData.append('img', articleData.img);
    formData.append('content', articleData.content);
    // formData.forEach((value, key) => {
    //   console.log(key, value);
    // });
    submitAction(formData)
    console.log('Article Data:', articleData);
  };

  useEffect(() => {
    if (edit && article) {
      setArticleData({
        title: article.title,
        content: article.content,
        authorName: article.authorName
      });
    }
  }, [edit, article]);
  return (
    <div className={`w-full flex flex-col p-5 gap-6 justify-between items-center bg-secondary rounded-xl shadow-sm shadow-lime-500 max-xl:p-5 max-xl:gap-5 max-lg:p-4 max-lg:gap-4 `}>
      {/* authorName */}
      <div className="w-full flex flex-col gap-2">
        <label htmlFor="authorName" className="text-lg font-semibold text-white">Author Name</label>
        <input type="text" id="authorName" className="bg-primary rounded-lg p-2 text-white" placeholder="Write Author Name for article" value={articleData.authorName} onChange={handleInputChange}/>
      </div>
      {/* title */}
      <div className="w-full flex flex-col gap-2">
        <label htmlFor="title" className="text-lg font-semibold text-white">Title</label>
        <input type="text" id="title" className="bg-primary rounded-lg p-2 text-white" placeholder="Write title for article" value={articleData.title} onChange={handleInputChange}/>
      </div>
      {/* image */}
      <div className="w-full flex flex-col gap-2">
        <label htmlFor="img" className="text-lg font-semibold text-white">Image</label>
        <input type="file" id="img" className="bg-primary rounded-lg p-2 text-white" placeholder="Write image for article" onChange={handleImageChange}/>
      </div>
      {/* Content */}
      <div className="w-full flex flex-col gap-2">
        <label htmlFor="content" className="text-lg font-semibold text-white">Content</label>
        <textarea id="content" className="h-40 bg-primary rounded-lg p-2 text-white " placeholder="Write content for article"  value={articleData.content} onChange={handleInputChange}/>
      </div>

      {/* submit */}
      <button className="text-xl px-5 py-3 mr-auto font-semibold text-white bg-lime-500 rounded-xl" onClick={handleSubmit}>Submit</button>
    </div>
  )
};

export default FormArticle;
