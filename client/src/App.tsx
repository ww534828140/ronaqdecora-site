import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import ReviewsAdmin from "@/pages/ReviewsAdmin";
import SectionPage from "@/pages/SectionPage";
import ServicesSection from "@/components/ServicesSection";
import ServicesKeywordsSection from "@/components/ServicesKeywordsSection";
import RiyadhDistrictsSection from "@/components/RiyadhDistrictsSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactSection from "@/components/ContactSection";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/reviews-admin"} component={ReviewsAdmin} />
      <Route path={"/services"}>
        <SectionPage
          title="خدمات الديكور والدهانات"
          description="معلم ديكورات ومعلم دهانات لتنفيذ بديل الرخام، بديل الشيبورد، ورق الجدران والتشطيبات داخل الرياض."
        >
          <ServicesSection />
          <ServicesKeywordsSection />
          <RiyadhDistrictsSection />
        </SectionPage>
      </Route>
      <Route path={"/projects"}>
        <SectionPage
          title="مشاريع رونق للديكور"
          description="شاهد نماذج من أعمال الديكور والتشطيبات والدهانات التي ننفذها لعملائنا في الرياض."
        >
          <ProjectsSection />
        </SectionPage>
      </Route>
      <Route path={"/about"}>
        <SectionPage
          title="من نحن"
          description="رونق للديكور مؤسسة متخصصة في الديكورات الداخلية والخارجية والدهانات والتشطيبات في الرياض."
        >
          <AboutSection />
        </SectionPage>
      </Route>
      <Route path={"/reviews"}>
        <SectionPage
          title="آراء عملاء رونق"
          description="اطّلع على تقييمات العملاء وشارك تجربتك مع رونق للديكور في الرياض."
        >
          <ReviewsSection />
        </SectionPage>
      </Route>
      <Route path={"/contact"}>
        <SectionPage
          title="تواصل مع رونق للديكور"
          description="تواصل معنا لطلب خدمة ديكور أو دهانات أو تشطيب داخل الرياض عبر الاتصال أو واتساب."
        >
          <ContactSection />
        </SectionPage>
      </Route>
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
