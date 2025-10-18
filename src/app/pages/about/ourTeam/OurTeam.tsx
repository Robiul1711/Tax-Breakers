import CommonButton from "@/common/CommonButton";
import SectionHeader from "@/common/SectionHeader";
import { getAllTeamMember } from "@/services/about/about";
import { TTeamMember } from "@/Types";

const OurTeam = async () => {
    const result = await getAllTeamMember();
    if (result instanceof Error) {
        return <div className="text-red-500">Failed to load blogs: {result.message}</div>;
    }
    const teamMembers: TTeamMember[] = result;
    return (
        <div>
            <SectionHeader title="Meet Out Team" main_title="Meet the Team Helping You Grow" />
            <div className="grid grid-cols-4 gap-5">
                {
                    teamMembers?.map(member => (
                        <div key={member?.id} style={{
                            backgroundImage: `url(${member?.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            width: "100%",
                            height: "455px",
                            borderRadius: "24px"
                        }} className="flex justify-center items-end p-4">
                            <div className="bg-[#FFF] rounded-2xl p-4 w-full text-center">
                                <h2 className="text-[#101115] text-2xl font-semibold">{member?.name}</h2>
                                <p className="text-[#677489] mt-2">{member?.position}</p>
                            </div>
                        </div>
                    ))
                }
                <div className="w-full bg-[#E7F9DE] rounded-3xl flex items-center justify-center flex-col p-10 text-center gap-6">
                    <h2 className="text-[#10110F] text-xl font-semibold">Ready to take control of your finances?</h2>
                    <CommonButton variant="primary">Book An Appointment</CommonButton>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;