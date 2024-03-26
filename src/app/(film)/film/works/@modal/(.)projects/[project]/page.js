import Video from "@/app/(film)/film/components/Video";

const VideoPageIntercepted = ({ params }) => {
  return (
    <>
      <Video projectId={params.project} modal={true} />
    </>
  );
};

export default VideoPageIntercepted;
