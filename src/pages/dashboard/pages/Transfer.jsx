import CustomAutocomplete from "../../../component/CustomAutocomplete/CustomAutocomplete";
import { userData } from "../../../component/CustomAutocomplete/data";

export default function Transfer() {
  return (
    <div
      className={`w-full pt-[100px] p-4 pb-0 h-[700px]`}
    >
      <div className="max-w-[1000px] mx-auto">
        <div className="mt-10 text-2xl">
            Transfer
        </div>
        <div className="mt-10 max-w-[600px] mx-auto">
            <div>
                <h2 className="text-3xl">Send payment to</h2>
            </div>
            <div className="mt-5">
            <CustomAutocomplete options={userData} />
            </div>
        </div>
      </div>
    </div>
  );
}
