import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Router as WouterRouter, Switch } from "wouter";
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
import ServiceDetailPage from "@/pages/ServiceDetailPage";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
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
      <Route path={"/decorations"}>
        <ServiceDetailPage
          title="معلم ديكورات بالرياض"
          description="معلم ديكورات بالرياض لتنفيذ الديكورات الداخلية والخارجية وحلول الديكور للمنازل والمجالس والشقق."
          intro="يقدم معلم ديكورات رونق خدمات تصميم وتنفيذ الديكورات داخل الرياض، مع عناية بالتفاصيل واختيار الخامات المناسبة لكل مساحة."
          services={["معلم ديكورات", "معلم ديكورات بالرياض", "ديكورات داخلية وخارجية"]}
        />
      </Route>
      <Route path={"/painting"}>
        <ServiceDetailPage
          title="معلم دهانات بالرياض"
          description="معلم دهان ومعلم دهانات بالرياض لتنفيذ الدهانات الداخلية والخارجية وتشطيبات الجدران باحترافية."
          intro="نوفر أعمال الدهانات الداخلية والخارجية داخل الرياض، من اختيار الألوان إلى تجهيز الأسطح والتنفيذ النهائي."
          services={["معلم دهان", "معلم دهانات بالرياض", "دهانات داخلية وخارجية"]}
        />
      </Route>
      <Route path={"/shiboard"}>
        <ServiceDetailPage
          title="معلم شيبورد وبديل الشيبورد بالرياض"
          description="معلم شيبورد بالرياض لتركيب الشيبورد وبديل الشيبورد والتكسيات الخشبية وخلفيات الشاشات."
          intro="تنفيذ الشيبورد وبديل الشيبورد والتكسيات الخشبية لخلفيات التلفزيون والجدران داخل مدينة الرياض وأحيائها."
          services={["معلم شيبورد", "معلم شيبورد بالرياض", "بديل الشيبورد", "تركيب شيبورد وتكسيات خشبية"]}
        />
      </Route>
      <Route path={"/wood-decor"}>
        <ServiceDetailPage
          title="معلم خشب وديكورات خشبية بالرياض"
          description="معلم خشب بالرياض لتنفيذ التكسيات الخشبية وبديل الخشب وديكورات الجدران وخلفيات الشاشات."
          intro="ننفذ الديكورات الخشبية والتكسيات وبديل الخشب للمجالس وغرف النوم وخلفيات التلفزيون داخل الرياض."
          services={["معلم خشب", "معلم خشب بالرياض", "تكسيات خشبية", "بديل الخشب", "ديكورات خشبية"]}
        />
      </Route>
      <Route path={"/wood"}>
        <ServiceDetailPage
          title="معلم خشب وديكورات خشبية بالرياض"
          description="معلم خشب بالرياض لتنفيذ التكسيات الخشبية وبديل الخشب وديكورات الجدران وخلفيات الشاشات."
          intro="ننفذ الديكورات الخشبية والتكسيات وبديل الخشب للمجالس وغرف النوم وخلفيات التلفزيون داخل الرياض."
          services={["معلم خشب", "معلم خشب بالرياض", "تكسيات خشبية", "بديل الخشب", "ديكورات خشبية"]}
        />
      </Route>
      <Route path={"/wallpaper"}>
        <ServiceDetailPage
          title="معلم ورق جدران بالرياض"
          description="معلم ورق جدران بالرياض لتركيب ورق الجدران واختيار التصاميم المناسبة للغرف والمجالس."
          intro="نساعدك في اختيار وتركيب ورق الجدران بتنسيق أنيق يناسب غرف النوم والمجالس والمساحات الداخلية."
          services={["معلم ورق جدران", "معلم ورق جدران بالرياض", "محلات ورق جدران الرياض"]}
        />
      </Route>
      <Route path={"/marble-alternative"}>
        <ServiceDetailPage
          title="تركيب بديل الرخام بالرياض"
          description="تركيب بديل الرخام بالرياض للجدران وخلفيات الشاشات والمجالس بتشطيب أنيق وعملي."
          intro="نوفر حلول بديل الرخام وبديل الخشب للمساحات الداخلية، مع تنفيذ دقيق داخل مدينة الرياض."
          services={["بديل الرخام", "بديل الرخام بالرياض", "تركيب بديل رخام الرياض"]}
        />
      </Route>
      <Route path={"/marble"}>
        <ServiceDetailPage
          title="تركيب بديل الرخام بالرياض"
          description="تركيب بديل الرخام بالرياض للجدران وخلفيات الشاشات والمجالس بتشطيب أنيق وعملي."
          intro="نوفر حلول بديل الرخام وبديل الخشب للمساحات الداخلية، مع تنفيذ دقيق داخل مدينة الرياض."
          services={["بديل الرخام", "بديل الرخام بالرياض", "تركيب بديل رخام الرياض"]}
        />
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
    </WouterRouter>
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
