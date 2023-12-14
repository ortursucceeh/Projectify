import { create } from "@/actions/create-board";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";

const OrganizationIdPage = async () => {
  const boards = await db.board.findMany();
  return (
    <div>
      <form action={create}>
        <input
          id="title"
          name="title"
          required
          placeholder="Enter a board title"
          className="border-black border p-2"
        />
        <Button type="submit">Sumbit</Button>
      </form>
      <div>
        {boards.map((board) => (
          <div key={board.id}>{board.title}</div>
        ))}
      </div>
    </div>
  );
};
export default OrganizationIdPage;
