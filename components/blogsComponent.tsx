"use client"
import { AppBar } from "@/components/AppBar";
import { BlogCard } from "@/components/BlogCard";
import { BlogSkeleton } from "@/components/BlogSkeleton";
import { useBlogs } from "@/Hooks";


export default function BlogsComponent(){
    
    const {loading,blogs}= useBlogs("a")
    if (loading) {
        return (<>
        <AppBar/>
        <div className="flex justify-center">
        <div className="">
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
            </div>
            </div>
            </>
        )
    }
  return (
    <div>
      <AppBar />
      <div className="flex justify-center">
        <div className="flex flex-col  justify-center">
          {blogs.map((blog: { title: string; content: string; author: { name: any; }; id: number; })=><BlogCard
          
            title={blog.title}
            content={blog.content}
            publishedDate="10/9/2020"
            authorName={blog.author.name||"Anonymous"}
            id={blog.id}
          />)}
        </div>
      </div>
    </div>
  );
};
