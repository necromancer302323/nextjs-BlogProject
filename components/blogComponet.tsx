"use client"
import { AppBar } from "@/components/AppBar";
import { FullBlogSkeleton } from "@/components/BlogSkeleton";
import { FullBlog } from "@/components/Fullblog";
import { useBlog } from "@/Hooks";
import { useParams } from "next/navigation";

export default function BlogComponent  ()  {
  const { id } = useParams();
  const { loading, blog } = useBlog({
    //@ts-ignore
    id: id || "",
  });
  if (loading) {
    return (
        <div>
            <AppBar/>
      <div>
        <FullBlogSkeleton/>
        <FullBlogSkeleton/>
        <FullBlogSkeleton/>
      </div>
      </div>
    );
  }
  return (
    <div>
      <FullBlog blog={blog} />
    </div>
  );
};
