import { OrganizationList } from "@clerk/nextjs";

function CreateOrganizationList() {
  return (
    <OrganizationList
      hidePersonal
      afterSelectOrganizationUrl="/organization:/id"
      afterCreateOrganizationUrl="/organization:/id"
    />
  );
}

export default CreateOrganizationList;
