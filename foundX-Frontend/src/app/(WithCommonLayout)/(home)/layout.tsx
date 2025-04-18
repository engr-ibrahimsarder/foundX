import { ReactNode } from "react";


const layout = ({
    children,
    recentPosts,
  }: {
    children: ReactNode;
    recentPosts: ReactNode;
  }) => {
  return (
    <div>
    <main>
      {children}
      {recentPosts}
    </main>
  </div>
  );
};

export default layout;