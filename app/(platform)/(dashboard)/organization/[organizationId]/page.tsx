import { create } from "@/actions/create-board";
import { Button } from "@/components/ui/button";

const OrganizationIdPage = () => {
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
    </div>
  );
};
export default OrganizationIdPage;
