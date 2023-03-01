import CommentCard from "./CommentCard";
export default function Comments() {
  return (
    <>
      <div
        className="h-screen/2 w-100% p-10 flex"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${
            process.env.PUBLIC_URL + "/Images/table.jpeg"
          })`,
        }}
      >
        <div className="m-auto">
          <CommentCard />
        </div>
      </div>
    </>
  );
}
