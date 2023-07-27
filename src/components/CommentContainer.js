import React from "react";
import Comment from "./Comment";
import CommentList from "./CommentList";

const commentsData = [
  {
    name: "Vijay Kanujia",
    text: "Gadar 2 trailer is awesome",
    replies: [
      {
        name: "comment child1",
        text: "lorem test description",
        replies: [
          {
            name: "comment child2",
            text: "lorem test description",
            replies: [
              {
                name: "comment child3",
                text: "lorem test description",
                replies: [],
              },
            ],
          },
          {
            name: "comment child2",
            text: "lorem test description",
            replies: [
              {
                name: "comment child3",
                text: "lorem test description",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "comment parrent",
    text: "lorem test description",
    replies: [],
  },
  {
    name: "comment parrent",
    text: "lorem test description",
    replies: [],
  },
];
const CommentContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments : </h1>
      <CommentList commentsList={commentsData} />
    </div>
  );
};

export default CommentContainer;
