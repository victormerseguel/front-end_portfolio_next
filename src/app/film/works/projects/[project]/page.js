import Video from "@/components/film/Video";

const VideoPage = ({ params }) => {
  return (
    <>
      <Video projectId={params.project} modal={false} />
    </>
  );
};

export default VideoPage;
