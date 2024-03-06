import Video from "@/components/film/Video";

const VideoPageIntercepted = ({ params }) => {
  return (
    <>
      <Video projectId={params.project} modal={true} />
    </>
  );
};

export default VideoPageIntercepted;
