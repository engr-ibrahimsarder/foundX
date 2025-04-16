import { Button } from "@heroui/button";
import Container from "../../UI/Container";
import { Link } from "@heroui/link";
import { getRecentPosts } from "@/src/services/RecentPosts";

const RecentPosts = async() => {
   const {data: posts} = await getRecentPosts()
    console.log("data", posts)
  return (
    <Container>
        <div className="section-title my-8">
            <h2 className="mb-2 text-center text-2xl">Recently Found Items</h2>
            <p className="text-center">A list of Items that have been recently found adn reported</p>
        </div>
        <div className="my-8 grid justify-center gap-10 sm:grid-cols-1 md:grid-cols-4">
        {
            posts.map((items)=> (<p>{items.title}</p>))
        }
        </div>
        <div className="flex justify-center">
            <Button className="rounded-md bg-default-900 text-default" size="md">
            <Link href="/found-items">See All</Link>
            </Button>
        </div>
    </Container>
  );
};

export default RecentPosts;