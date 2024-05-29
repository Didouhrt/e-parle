import { useState, useEffect } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { HashLoader } from "react-spinners";
import { RiEditFill, RiDeleteBin6Fill } from "react-icons/ri";
import Modal from "../Modal/Modal";
import "./Review.css";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [page, setPage] = useState(6);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editedReview, setEditedReview] = useState("");
  const [editedReviewIndex, setEditedReviewIndex] = useState(null);
  const [deleteReview, setDeleteReview] = useState(null);

  const loadMoreData = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setPage(page + 6);
      setIsLoadingMore(false);
    }, 1000);
  };

  const [formData, setFormData] = useState({
    name: "",
    reviewText: "",
    image: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      name: "harrat abdelmalek",
      reviewText: formData.reviewText,
      date: new Date().toLocaleDateString(),
      image: "https://source.unsplash.com/random/50x50/?portrait",
    };
    setReviews((prevReviews) => [...prevReviews, newReview]);
    setFormData({
      ...formData,
      reviewText: "",
      image: "",
    });
  };

  const handleEdit = (index) => {
    setEditMode(true);
    setEditedReview(reviews[index].reviewText);
    setEditedReviewIndex(index);
  };

  const handleUpdate = () => {
    const updatedReviews = [...reviews];
    updatedReviews[editedReviewIndex].reviewText = editedReview;
    setReviews(updatedReviews);
    setEditMode(false);
    setEditedReview("");
    setEditedReviewIndex(null);
  };

  const handleDelete = (index) => {
    setDeleteReview(index);
  };

  const confirmDelete = () => {
    const updatedReviews = [...reviews];
    updatedReviews.splice(deleteReview, 1);
    setReviews(updatedReviews);
    setDeleteReview(null);
  };

  const cancelDelete = () => {
    setDeleteReview(null);
  };

  useEffect(() => {
    deleteReview !== null
      ? document.body.classList.add("activeOverlay")
      : document.body.classList.remove("activeOverlay");
  }, [deleteReview]);

  return (
    <div>
      <form className="review_form" onSubmit={handleSubmit}>
        <div>
          <input
            id="review"
            name="reviewText"
            value={formData.reviewText}
            onChange={handleInputChange}
            placeholder="Partager votre avis!"
            autoComplete="off"
          />
        </div>
        <button
          className={`flex_center review_submit_btn ${
            formData.reviewText.trim() !== "" ? "active_review_input" : ""
          }`}
          type="submit"
        >
          <FaLocationArrow />
        </button>
      </form>

      <div>
        {reviews.slice(0, page).map((review, index) => (
          <div
            key={index}
            className="pad_blk1 flex flex_column single_review_container"
          >
            <div className="review_user_info flex gap1">
              <img
                src={review.image}
                className="review_avatar_img"
                alt="profile image"
              />

              <div className="flex gap1">
                <h5>{review.name}</h5>
                <span> {review.date}</span>
              </div>
            </div>
            {editMode && editedReviewIndex === index ? (
              <form className="review_form">
                <div>
                  <input
                    type="text"
                    value={editedReview}
                    onChange={(e) => setEditedReview(e.target.value)}
                    className="updateInput"
                  />
                </div>
                <button
                  className={`flex_center review_submit_btn ${
                    editedReview.trim() !== "" ? "active_review_input" : ""
                  }`}
                  onClick={handleUpdate}
                >
                  <FaLocationArrow />
                </button>
              </form>
            ) : (
              <div className="flex_between gap1">
                <p className="review_text">{review.reviewText}</p>
                <div className="flex_center gap1-2">
                  <button onClick={() => handleEdit(index)}>
                    <RiEditFill className="review_icons" />
                  </button>
                  <button onClick={() => handleDelete(index)}>
                    <RiDeleteBin6Fill className="review_icons" />
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
        {reviews.length > 6 &&
          (isLoadingMore ? (
            <HashLoader
              className="margin_inline_auto pad_blk1"
              size={50}
              color={"#fa997b"}
              loading={isLoadingMore}
            />
          ) : (
            <button
              onClick={loadMoreData}
              className="margin_top1 secondary_btn"
            >
              <span>charger plus</span>
            </button>
          ))}
      </div>
      {deleteReview !== null && (
        <Modal
          title="Veuillez confirmer"
          content="Êtes-vous sûr de vouloir supprimer ce Avis?"
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
    </div>
  );
};

export default Review;
