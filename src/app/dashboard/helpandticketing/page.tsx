import TicketAndHelpPage from "@/app/pages/dashboard/TicketAndHelpPage/TicketAndHelpPage"
import { getAllTickets } from "@/services/dashboard/ticket/ticket";
import { TTickets } from "@/Types";



const DashboardTicketingPage = async () => {
  const data = await getAllTickets()
  const ticketData: TTickets[] = data instanceof Error ? [] : data;



  return (
    <TicketAndHelpPage  ticketData={ticketData}/>
  )

}

export default DashboardTicketingPage