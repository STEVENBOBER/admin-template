import prismadb from "@/lib/prismadb"
import { ColorForm } from "./components/ColorForm";


const ColorPage = async ({
  params
}: {
  params: { colorId: string }
}) => {
  const color = await prismadb.color.findUnique({
    where: {
      id: params.colorId
    }
  });

  return (
    <div className="flex-col" >
      <div className="flex-1 space-y-4 p-8 pt-6" >
        {/* Add list of hex values to help people 
        select what colors they may want to choose. Or
        at least put a link on the page. */}
        <ColorForm initialData={color} />
        <p>
          Add list of hex codes to represent color values to input.
          This is for non-coders.
        </p>
      </div>
    </div>
  )

}

export default ColorPage