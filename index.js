import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentsDetails from "./commentsDetails";
import ApprovalCard from './ApprovalCard'
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentsDetails
          author="Roshan"
          time="Today at 6:00AM"
          avatar={faker.image.avatar()}
          comment="It's a nice day"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentsDetails
          author="Rani"
          time="Today at 9:00AM"
          avatar={faker.image.avatar()}
          comment="Great post"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentsDetails
          author="Rahul"
          time="Yesterday at 8:00AM"
          avatar={faker.image.avatar()}
          comment="Awesome blog"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
