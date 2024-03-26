import Video from "@/app/(_film)/film/components/Video";

const VideoPageIntercepted = ({ params }) => {
  return (
    <>
      <Video projectId={params.project} modal={true} />
    </>
  );
};

export default VideoPageIntercepted;
