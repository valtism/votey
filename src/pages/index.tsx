import { prisma } from "../db/client";
import type { NextPage } from "next";

const Home: NextPage = (props: any) => {
  return (
    <div>
      <h1>Title</h1>
      <code>{props.questions}</code>
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const questions = await prisma.pollQuestion.findMany();

  return {
    props: {
      questions: JSON.stringify(questions),
    },
  };
};
