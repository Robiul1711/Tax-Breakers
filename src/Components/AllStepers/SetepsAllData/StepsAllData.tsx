
import img1 from "@/assets/stepsimages/1.png";
import img2 from "@/assets/stepsimages/2.png";
import img3 from "@/assets/stepsimages/3.png";
import img4 from "@/assets/stepsimages/4.png";
import img5 from "@/assets/stepsimages/5.png";
import img6 from "@/assets/stepsimages/6.png";
import img7 from "@/assets/stepsimages/7.png";
import img8 from "@/assets/stepsimages/8.png";
import img9 from "@/assets/stepsimages/9.png";
import img10 from "@/assets/stepsimages/10.png";

interface StepData {
  id: number;
  title: string;
  description: string;
  image: any;
}

const stepsData: StepData[] = [
  { id: 1, title: "Resident in Italy for more than 183 days?", description: "Select all that apply", image: img1 },
  { id: 2, title: "Educational qualifications & highly qualified professional qualification (Bachelor/Master)?", description: "Select your job type", image: img2 },
  { id: 3, title: "Not tax resident in Italy in previous 3 tax periods?", description: "Select all that apply", image: img3 },
  { id: 4, title: "Undertake to reside for tax purposes in Italy for at least 4 years?", description: "Provide accurate info", image: img4 },
  { id: 5, title: "Projected annual turnover over €85,000?", description: "Select all that apply", image: img5 },
  { id: 6, title: "Earned income exceeding €30,000 in previous 3 years?", description: "Select your case", image: img6 },
  { id: 7, title: "Activity directed towards current/former employer in previous 2 years?", description: "Select your health status", image: img7 },
  { id: 8, title: "Current year expenses for employees/collaborators exceeding €20,000?", description: "Select all that apply", image: img8 },
  { id: 9, title: "Participation in limited liability companies (direct/indirect control)?", description: "Upload necessary files", image: img9 },
  { id: 10, title: "Other information to share (real estate, extra income, crypto, stock options)?", description: "Check summary", image: img10 },
];

export default stepsData