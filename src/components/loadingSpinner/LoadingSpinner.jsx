import { Ring } from "@uiball/loaders";

export default function LoadingSpinner() {
  return (
    <div className="absolute top-0 left-0 pt-24 right-0 w-full h-screen bg-black/70">
        <div className="rounded max-w-[450px] h-[450px] flex items-center justify-center mx-auto p-5 pt-1">
          <Ring size={100} lineWeight={5} speed={2} color="black" />
        </div>
    </div>
  )
}
