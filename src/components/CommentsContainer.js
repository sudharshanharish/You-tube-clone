import React from 'react';

const commentsData = [
  {
    name: "Sudharshan",
    text: "This is a great video!",
    replies: [
      {
        name: "Jane",
        text: "I agree!",
        replies: [
          {
            name: "Alex",
            text: "Same here!",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Ravi",
    text: "Amazing explanation.",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex p-2 m-2 bg-gray-100 rounded shadow-sm">
      <img
        className="w-8 h-8 mr-2"
        alt="user"
        src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
      />
      <div>
        <p className="font-semibold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      {comment.replies?.length > 0 && (
        <div className="pl-5 border-l-2 border-gray-300 ml-6">
          <CommentsList comments={comment.replies} />
        </div>
      )}
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold mb-4">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
