import Video from "@/app/(film)/film/components/Video";

const VideoPage = ({ params }) => {
  return (
    <>
      <Video projectId={params.project} modal={false} />
    </>
  );
};

export default VideoPage;
