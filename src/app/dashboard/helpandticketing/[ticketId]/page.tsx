import TicketDetails from "@/app/pages/dashboard/TicketAndHelpPage/TicketDetailsPage/TicketDetails";


const TicketDetailsPage = async({params} :{params: Promise<{ticketId : string}>}) => {
    const {ticketId} = await params;
    return (
        <div className="bg-[#FBFBFB] rounded-3xl">
            <TicketDetails ticketId={ticketId}/>
        </div>
    );
};

export default TicketDetailsPage;