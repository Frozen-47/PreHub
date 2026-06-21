import { useState, useEffect } from 'react';
import { 
  Lock, CheckSquare, CloudDownload, 
  GraduationCap, Search, ClipboardList, 
  LayoutGrid, Users, Code, Play, 
  Terminal, Monitor, Tablet, Smartphone, 
  X, Loader2, Copy, Check, FolderGit2
} from 'lucide-react';

import Preloader from './Preloader';

interface FileItem {
  name: string;
  path: string;
  type: 'html' | 'css' | 'js' | 'jsx';
}

interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'static' | 'react' | 'tailwind';
  tags: string[];
  files: FileItem[];
  previewUrl: string;
  icon: React.ComponentType<any>;
  color: string;
  features: string[];
  status: string;
}

const PROJECTS_DATA: Project[] = [
  {
    id: 'LoginPageTask',
    title: 'Modern Login Portal',
    tagline: 'Sleek dark/light theme login form validation with social login integrations and user validation tips.',
    category: 'static',
    tags: ['HTML5', 'CSS3', 'Vanilla JS', 'Validation'],
    files: [
      { name: 'index.html', path: 'projects/LoginPageTask/index.html', type: 'html' },
      { name: 'script.js', path: 'projects/LoginPageTask/script.js', type: 'js' },
      { name: 'styles.css', path: 'projects/LoginPageTask/styles.css', type: 'css' }
    ],
    previewUrl: './projects/LoginPageTask/index.html',
    icon: Lock,
    color: '#8b5cf6', // Violet
    features: ['Real-time input validation', 'Toggle password visibility', 'Credentials tip box', 'Responsive layout', 'FontAwesome integration'],
    status: 'Ready'
  },
  {
    id: 'To-do',
    title: 'Interactive To-Do App',
    tagline: 'A classic core-JS task management dashboard for adding, tracking, and clearing tasks.',
    category: 'static',
    tags: ['HTML5', 'CSS3', 'Vanilla JS', 'Local Storage'],
    files: [
      { name: 'index.html', path: 'projects/To-do/index.html', type: 'html' },
      { name: 'script.js', path: 'projects/To-do/script.js', type: 'js' }
    ],
    previewUrl: './projects/To-do/index.html',
    icon: CheckSquare,
    color: '#06b6d4', // Cyan
    features: ['Dynamic DOM list generation', 'Add task button', 'Clear all task controls', 'Clean interactive CSS design'],
    status: 'Ready'
  },
  {
    id: 'FetchingFromAn_API',
    title: 'JSON API Fetcher (Vanilla)',
    tagline: 'Core JavaScript API query script that retrieves user list data from JSONPlaceholder API and builds active lists.',
    category: 'static',
    tags: ['HTML5', 'CSS3', 'API Integration', 'Asynchronous JS'],
    files: [
      { name: 'index.html', path: 'projects/FetchingFromAn_API/index.html', type: 'html' },
      { name: 'script.js', path: 'projects/FetchingFromAn_API/script.js', type: 'js' },
      { name: 'style.css', path: 'projects/FetchingFromAn_API/style.css', type: 'css' }
    ],
    previewUrl: './projects/FetchingFromAn_API/index.html',
    icon: CloudDownload,
    color: '#3b82f6', // Blue
    features: ['Fetch API Integration', 'Async/Await error handling', 'Dynamic user lists creation', 'Clean button controls'],
    status: 'Ready'
  },
  {
    id: 'StudentDashboardApp',
    title: 'React Student Dashboard',
    tagline: 'Vite React application featuring navigation routing, student registries, details cards, and sub-dashboard configs.',
    category: 'react',
    tags: ['React', 'Vite', 'React Router', 'React JSX'],
    files: [
      { name: 'App.jsx', path: 'projects/StudentDashboardApp/src/App.jsx', type: 'jsx' },
      { name: 'main.jsx', path: 'projects/StudentDashboardApp/src/main.jsx', type: 'jsx' },
      { name: 'Navbar.jsx', path: 'projects/StudentDashboardApp/src/components/Navbar.jsx', type: 'jsx' },
      { name: 'Home.jsx', path: 'projects/StudentDashboardApp/src/pages/Home.jsx', type: 'jsx' },
      { name: 'Dashboard.jsx', path: 'projects/StudentDashboardApp/src/pages/Dashboard.jsx', type: 'jsx' },
      { name: 'Students.jsx', path: 'projects/StudentDashboardApp/src/pages/Students.jsx', type: 'jsx' },
      { name: 'StudentDetails.jsx', path: 'projects/StudentDashboardApp/src/pages/StudentDetails.jsx', type: 'jsx' },
      { name: 'Profile.jsx', path: 'projects/StudentDashboardApp/src/pages/Profile.jsx', type: 'jsx' },
      { name: 'Settings.jsx', path: 'projects/StudentDashboardApp/src/pages/Settings.jsx', type: 'jsx' }
    ],
    previewUrl: './projects/StudentDashboardApp/dist/index.html',
    icon: GraduationCap,
    color: '#8b5cf6', // Violet
    features: ['Nested Route configurations', 'Dynamic parameters (/students/:id)', 'Global styled Navigation Bar', 'Custom dashboards', 'Interactive grid displays'],
    status: 'Built & Ready'
  },
  {
    id: 'ProductSearchCardApp',
    title: 'Product Search & Debounce',
    tagline: 'Vite React client implementing debounced search inputs and local storage hooks to persist query terms.',
    category: 'react',
    tags: ['React', 'Custom Hooks', 'LocalStorage', 'Debounce'],
    files: [
      { name: 'App.jsx', path: 'projects/ProductSearchCardApp/src/App.jsx', type: 'jsx' },
      { name: 'main.jsx', path: 'projects/ProductSearchCardApp/src/main.jsx', type: 'jsx' },
      { name: 'useDebounce.js', path: 'projects/ProductSearchCardApp/src/hooks/useDebounce.js', type: 'js' },
      { name: 'useLocalStorage.js', path: 'projects/ProductSearchCardApp/src/hooks/useLocalStorage.js', type: 'js' }
    ],
    previewUrl: './projects/ProductSearchCardApp/dist/index.html',
    icon: Search,
    color: '#06b6d4', // Cyan
    features: ['useDebounce custom hook', 'useLocalStorage state hook', 'Dynamic input filtering', 'Indian Rupee local formatting', 'Zero search results handler'],
    status: 'Built & Ready'
  },
  {
    id: 'Form',
    title: 'Validated Signup Portal',
    tagline: 'Responsive signup wizard with deep state validation, customized dark mode, and tailwind variables.',
    category: 'react',
    tags: ['React', 'Tailwind CSS', 'Form State', 'Dark Mode'],
    files: [
      { name: 'App.jsx', path: 'projects/Form/src/App.jsx', type: 'jsx' },
      { name: 'main.jsx', path: 'projects/Form/src/main.jsx', type: 'jsx' }
    ],
    previewUrl: './projects/Form/dist/index.html',
    icon: ClipboardList,
    color: '#10b981', // Green
    features: ['Complete React Form State mapping', 'Email and password validation regex', 'Gender and terms checkbox checks', 'Tailwind CSS dark mode class matching'],
    status: 'Built & Ready'
  },
  {
    id: 'TailWind_CSS',
    title: 'Flexbox Layout Studio',
    tagline: 'React component styled with Tailwind showcasing responsive flex alignments and growth ratios.',
    category: 'tailwind',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Flexbox'],
    files: [
      { name: 'App.jsx', path: 'projects/TailWind_CSS/src/App.jsx', type: 'jsx' },
      { name: 'main.jsx', path: 'projects/TailWind_CSS/src/main.jsx', type: 'jsx' }
    ],
    previewUrl: './projects/TailWind_CSS/dist/index.html',
    icon: LayoutGrid,
    color: '#10b981', // Green
    features: ['Tailwind CSS v4 Integration', 'Grow and shrink demonstrations', 'Flexbox gap utilities', 'Responsive box sizing'],
    status: 'Built & Ready'
  },
  {
    id: 'FetchingThroughReact',
    title: 'React API User Registry',
    tagline: 'Asynchronous fetch lists built in React connecting API queries into local component hooks.',
    category: 'react',
    tags: ['React', 'Vite', 'Fetch API', 'Component Hooks'],
    files: [
      { name: 'App.jsx', path: 'projects/FetchingThroughReact/src/App.jsx', type: 'jsx' },
      { name: 'main.jsx', path: 'projects/FetchingThroughReact/src/main.jsx', type: 'jsx' }
    ],
    previewUrl: './projects/FetchingThroughReact/dist/index.html',
    icon: Users,
    color: '#3b82f6', // Blue
    features: ['Dynamic asynchronous query loaders', 'State updating lists', 'JSONPlaceholder users schema mapping', 'Inline clean styles configuration'],
    status: 'Built & Ready'
  }
];

export default function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'react' | 'static' | 'tailwind'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Modal states
  const [previewModal, setPreviewModal] = useState<{
    isOpen: boolean;
    project: Project | null;
    viewMode: 'desktop' | 'tablet' | 'mobile';
    iframeUrl: string;
    showDevGuide: boolean;
  }>({
    isOpen: false,
    project: null,
    viewMode: 'desktop',
    iframeUrl: '',
    showDevGuide: false
  });

  const [codeModal, setCodeModal] = useState<{
    isOpen: boolean;
    project: Project | null;
    activeFile: FileItem | null;
    codeContent: string;
    isLoading: boolean;
    error: string;
  }>({
    isOpen: false,
    project: null,
    activeFile: null,
    codeContent: '',
    isLoading: false,
    error: ''
  });

  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [devInputUrl, setDevInputUrl] = useState('http://localhost:5173');

  useEffect(() => {
    if (showPreloader) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showPreloader]);

  // Handle Code File Loading
  useEffect(() => {
    if (!codeModal.isOpen || !codeModal.activeFile) return;

    const loadFile = async () => {
      setCodeModal(prev => ({ ...prev, isLoading: true, error: '', codeContent: '' }));
      try {
        const res = await fetch(`./${codeModal.activeFile!.path}`);
        if (!res.ok) throw new Error(`HTTP Error Status: ${res.status}`);
        const data = await res.text();
        setCodeModal(prev => ({ ...prev, codeContent: data, isLoading: false }));
      } catch (err: any) {
        setCodeModal(prev => ({ 
          ...prev, 
          error: `Failed to load file content: ${err.message}. Ensure the file exists.`, 
          isLoading: false 
        }));
      }
    };

    loadFile();
  }, [codeModal.activeFile, codeModal.isOpen]);

  // Copy to clipboard helper
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  // Filtering Logic
  const filteredProjects = PROJECTS_DATA.filter(proj => {
    const matchesFilter = selectedFilter === 'all' || 
      (selectedFilter === 'react' && proj.category === 'react') ||
      (selectedFilter === 'static' && proj.category === 'static') ||
      (selectedFilter === 'tailwind' && (proj.category === 'tailwind' || proj.tags.includes('Tailwind CSS')));
      
    const matchesSearch = proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      
    return matchesFilter && matchesSearch;
  });

  // Basic code syntax highlighting
  const renderHighlightedCode = (code: string, fileType: string) => {
    let escaped = code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
      
    if (fileType === 'js' || fileType === 'jsx' || fileType === 'ts' || fileType === 'tsx') {
      escaped = escaped.replace(/(['"`])(.*?)\1/g, '<span class="text-emerald-400">$1$2$1</span>');
      const keywords = /\b(const|let|var|function|return|import|from|export|default|class|extends|if|else|for|while|try|catch|async|await|default|switch|case|new|this|interface|type)\b/g;
      escaped = escaped.replace(keywords, '<span class="text-rose-400">$1</span>');
      escaped = escaped.replace(/\b(\d+)\b/g, '<span class="text-sky-400">$1</span>');
      escaped = escaped.replace(/(=&gt;|=>|{|}|\(|\)|\[|\])/g, '<span class="text-indigo-400">$1</span>');
      escaped = escaped.replace(/(\/\/.*)/g, '<span class="text-neutral-500 font-normal">$1</span>');
      escaped = escaped.replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="text-neutral-500 font-normal">$1</span>');
    } else if (fileType === 'css') {
      escaped = escaped.replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="text-neutral-500 font-normal">$1</span>');
      escaped = escaped.replace(/({|})/g, '<span class="text-rose-400">$1</span>');
      escaped = escaped.replace(/([\w-]+)\s*:/g, '<span class="text-sky-400">$1</span>:');
      escaped = escaped.replace(/:\s*([^;]+);/g, ': <span class="text-emerald-400">$1</span>;');
    } else if (fileType === 'html') {
      escaped = escaped.replace(/(&lt;\/?[a-zA-Z0-9:-]+)/g, '<span class="text-rose-400">$1</span>');
      escaped = escaped.replace(/(\/?&gt;)/g, '<span class="text-rose-400">$1</span>');
      escaped = escaped.replace(/(\s[a-zA-Z0-9:-]+=)(["'])(.*?)\2/g, '<span class="text-sky-400">$1</span><span class="text-emerald-400">$2$3$2</span>');
      escaped = escaped.replace(/(&lt;!--[\s\S]*?--&gt;)/g, '<span class="text-neutral-500 font-normal">$1</span>');
    }
    return <code dangerouslySetInnerHTML={{ __html: escaped }} />;
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black font-sans text-sm text-gray-900 dark:text-white transition-colors duration-300 selection:bg-neutral-200 dark:selection:bg-neutral-800">
      
      {showPreloader && <Preloader onComplete={() => setShowPreloader(false)} />}

      <main className="max-w-4xl mx-auto px-4 pt-12 pb-12 flex flex-col gap-6">
        
        {/* Banner Section */}
        <section className="py-4 mt-6">
          <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-neutral-500 uppercase tracking-widest">
            <FolderGit2 className="w-4 h-4 text-violet-500 animate-pulse" />
            Workspace Portal
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">Placement Preparation Hub</h1>
          <p className="text-[14px] text-gray-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
            A centralized dashboard portal to launch, review, and inspect all front-end placement prep milestones. Inspect source files instantly or run built sandboxes.
          </p>
        </section>

        {/* Stats Row */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4" aria-label="Metrics Grid">
          {[
            { label: "Total Tasks", value: "8", color: "text-violet-500" },
            { label: "React Apps", value: "5", color: "text-sky-500" },
            { label: "Vanilla Static", value: "3", color: "text-cyan-500" },
            { label: "Tailwind CSS", value: "2", color: "text-emerald-500" }
          ].map((stat, idx) => (
            <div key={idx} className="bg-gray-50 dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-2xl p-5 flex flex-col items-center justify-center transition-all hover:border-neutral-300 dark:hover:border-neutral-700">
              <div className={`text-2xl font-bold mb-1 ${stat.color}`}>{stat.value}</div>
              <div className="text-[11px] font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider text-center">{stat.label}</div>
            </div>
          ))}
        </section>

        {/* Filters and Controls */}
        <section className="flex flex-col sm:flex-row gap-4 items-stretch justify-between mt-4">
          <div className="flex flex-wrap gap-1.5 p-1 bg-gray-50 dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-full w-fit">
            {[
              { id: 'all', label: 'All Works' },
              { id: 'react', label: 'React Apps' },
              { id: 'static', label: 'Static HTML' },
              { id: 'tailwind', label: 'Tailwind' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id as any)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  selectedFilter === tab.id 
                    ? 'bg-neutral-900 text-white dark:bg-white dark:text-black shadow-md' 
                    : 'text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="relative flex-grow sm:max-w-xs">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search tasks..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-neutral-200 dark:border-neutral-800 rounded-full bg-gray-50 dark:bg-black text-xs outline-none focus:border-neutral-400 dark:focus:border-neutral-700 transition-colors"
            />
          </div>
        </section>

        {/* Projects Cards Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          {filteredProjects.length > 0 ? (
            filteredProjects.map(proj => {
              const Icon = proj.icon;
              return (
                <div 
                  key={proj.id} 
                  className="bg-gray-50 dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-2xl p-5 flex flex-col justify-between transition-all hover:border-neutral-300 dark:hover:border-neutral-700 group relative overflow-hidden"
                >
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <div 
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-white" 
                        style={{ backgroundColor: proj.color }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                        proj.category === 'react' 
                          ? 'bg-sky-500/10 text-sky-500' 
                          : proj.category === 'static' 
                          ? 'bg-cyan-500/10 text-cyan-500' 
                          : 'bg-emerald-500/10 text-emerald-500'
                      }`}>
                        {proj.category === 'react' ? 'React + Vite' : proj.category === 'static' ? 'Static App' : 'Tailwind Layout'}
                      </span>
                    </div>

                    <h3 className="text-[15px] font-bold text-gray-900 dark:text-white mb-1.5">{proj.title}</h3>
                    <p className="text-[12.5px] text-gray-500 dark:text-neutral-400 leading-relaxed mb-4">{proj.tagline}</p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {proj.tags.map((t, i) => (
                        <span key={i} className="text-[10px] bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 px-2 py-0.5 rounded-md border border-neutral-200/50 dark:border-neutral-800/50 font-mono">{t}</span>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <button 
                        onClick={() => setPreviewModal({
                          isOpen: true,
                          project: proj,
                          viewMode: proj.category === 'static' ? 'desktop' : 'desktop',
                          iframeUrl: proj.category === 'static' ? proj.previewUrl : '',
                          showDevGuide: proj.category !== 'static'
                        })}
                        className="flex-grow flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-100 text-white transition-colors"
                      >
                        {proj.category === 'static' ? <Play className="w-3.5 h-3.5 fill-current" /> : <Terminal className="w-3.5 h-3.5" />}
                        {proj.category === 'static' ? 'Live Preview' : 'Run Sandbox'}
                      </button>
                      <button 
                        onClick={() => {
                          setCodeModal({
                            isOpen: true,
                            project: proj,
                            activeFile: proj.files[0] || null,
                            codeContent: '',
                            isLoading: false,
                            error: ''
                          });
                        }}
                        className="px-3 py-2 text-xs font-semibold rounded-xl border border-neutral-200 dark:border-neutral-800 hover:bg-black/5 dark:hover:bg-white/5 transition-colors flex items-center justify-center gap-1.5"
                      >
                        <Code className="w-3.5 h-3.5" />
                        Inspect
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-span-full border border-dashed border-neutral-300 dark:border-neutral-800 rounded-2xl p-12 text-center text-neutral-400 dark:text-neutral-500">
              No tasks match your filter tags or search queries.
            </div>
          )}
        </section>

      </main>

      {/* PREVIEW SANDBOX MODAL */}
      {previewModal.isOpen && previewModal.project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-3xl w-full h-[88vh] max-w-5xl shadow-2xl flex flex-col overflow-hidden">
            
            <div className="px-6 py-4 border-b border-neutral-200 dark:border-neutral-850 flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                <h2 className="font-bold text-sm tracking-tight">{previewModal.project.title} - Live Sandbox</h2>
                
                {/* Sizing Toggles for Iframe */}
                {!previewModal.showDevGuide && (
                  <div className="ml-4 flex gap-1 p-0.5 bg-neutral-100 dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800">
                    {[
                      { id: 'desktop', icon: Monitor, lbl: 'Desktop' },
                      { id: 'tablet', icon: Tablet, lbl: 'Tablet' },
                      { id: 'mobile', icon: Smartphone, lbl: 'Mobile' }
                    ].map(mode => {
                      const MIcon = mode.icon;
                      return (
                        <button
                          key={mode.id}
                          onClick={() => setPreviewModal(prev => ({ ...prev, viewMode: mode.id as any }))}
                          className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-semibold transition-all ${
                            previewModal.viewMode === mode.id
                              ? 'bg-white dark:bg-neutral-800 shadow-sm text-neutral-900 dark:text-white'
                              : 'text-neutral-400 hover:text-neutral-600'
                          }`}
                        >
                          <MIcon className="w-3 h-3" />
                          {mode.lbl}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
              <button 
                onClick={() => setPreviewModal(prev => ({ ...prev, isOpen: false, project: null, iframeUrl: '' }))}
                className="w-8 h-8 rounded-full flex items-center justify-center text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:text-neutral-900 dark:hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-grow bg-neutral-100 dark:bg-black overflow-hidden relative">
              {previewModal.showDevGuide ? (
                <div className="w-full h-full overflow-y-auto p-6 md:p-12 flex justify-center">
                  <div className="max-w-xl w-full flex flex-col gap-6">
                    <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white">Sandbox Launcher Options</h3>
                    
                    {/* Option 1: Compiled direct dist launch */}
                    <div className="border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black rounded-2xl p-5 text-center">
                      <h4 className="text-sm font-bold text-emerald-500 mb-1 flex items-center justify-center gap-1.5">
                        <Play className="w-4 h-4 fill-current" /> Option 1: Run Compiled Production Build
                      </h4>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-4 leading-relaxed">
                        Directly launch the pre-compiled static production assets located in the project's <code className="bg-neutral-100 dark:bg-neutral-900 px-1 py-0.5 rounded text-rose-500 font-mono text-[11px]">dist/</code> folder inside the iframe.
                      </p>
                      <button
                        onClick={() => setPreviewModal(prev => ({
                          ...prev,
                          showDevGuide: false,
                          iframeUrl: prev.project!.previewUrl
                        }))}
                        className="w-full py-2.5 text-xs font-semibold rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white shadow-md transition-colors"
                      >
                        Launch Direct Preview Sandbox
                      </button>
                    </div>

                    <div className="relative text-center">
                      <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-neutral-200 dark:bg-neutral-850" />
                      <span className="relative z-10 px-3 bg-neutral-100 dark:bg-black text-[10px] font-bold text-neutral-400 tracking-wider">OR DEVELOP LOCALLY</span>
                    </div>

                    {/* Option 2: Dev guide */}
                    <div className="border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black rounded-2xl p-5">
                      <h4 className="text-sm font-bold text-amber-500 mb-1.5 flex items-center gap-1.5">
                        <Terminal className="w-4 h-4" /> Option 2: Run Development server
                      </h4>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-3 leading-relaxed">
                        To run the project in development mode with active hot-reloading, run these commands in your workspace directory shell:
                      </p>

                      <div className="flex flex-col gap-3 font-mono text-[11px] bg-neutral-50 dark:bg-black p-4 border border-neutral-200 dark:border-neutral-800 rounded-xl">
                        {[
                          { lbl: 'Navigate:', cmd: `cd "projects/${previewModal.project.id}"` },
                          { lbl: 'Install dependencies:', cmd: 'npm install' },
                          { lbl: 'Start Dev Server:', cmd: 'npm run dev' }
                        ].map((step, idx) => (
                          <div key={idx}>
                            <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1 font-sans">{step.lbl}</div>
                            <div className="flex justify-between items-center bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-lg pl-3 pr-1 py-1 text-sky-400 select-all">
                              <span>{step.cmd}</span>
                              <button
                                onClick={() => handleCopy(step.cmd)}
                                className="w-7 h-7 rounded-md flex items-center justify-center text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:text-neutral-900 dark:hover:text-white transition-colors"
                              >
                                {copiedText === step.cmd ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 border-t border-neutral-200 dark:border-neutral-850 pt-4">
                        <div className="text-xs font-bold text-neutral-800 dark:text-white mb-2 flex items-center gap-1.5">
                          Link Dev Server to Dashboard Iframe
                        </div>
                        <div className="flex gap-2">
                          <input
                            type="text"
                            value={devInputUrl}
                            onChange={e => setDevInputUrl(e.target.value)}
                            className="flex-grow pl-3 pr-3 py-1.5 bg-neutral-50 dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-xl text-xs font-mono outline-none"
                          />
                          <button
                            onClick={() => setPreviewModal(prev => ({
                              ...prev,
                              showDevGuide: false,
                              iframeUrl: devInputUrl
                            }))}
                            className="bg-neutral-900 text-white dark:bg-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-100 text-xs px-4 py-2 font-semibold rounded-xl shadow transition-colors"
                          >
                            Connect Sandbox
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full h-full flex justify-center items-center p-6 overflow-auto">
                  <iframe 
                    src={previewModal.iframeUrl} 
                    title="Sandbox Screen" 
                    className={`bg-white border-2 border-neutral-200 dark:border-neutral-850 shadow-xl rounded-2xl transition-all duration-300 ${
                      previewModal.viewMode === 'mobile' 
                        ? 'w-[375px] h-[667px]' 
                        : previewModal.viewMode === 'tablet'
                        ? 'w-[768px] h-[1024px]'
                        : 'w-full h-full'
                    }`}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* SOURCE CODE INSPECTOR MODAL */}
      {codeModal.isOpen && codeModal.project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-3xl w-full h-[88vh] max-w-5xl shadow-2xl flex flex-col overflow-hidden">
            
            <div className="px-6 py-4 border-b border-neutral-200 dark:border-neutral-850 flex items-center justify-between">
              <div className="flex items-center gap-2 text-violet-500">
                <Code className="w-5 h-5" />
                <h2 className="font-bold text-sm tracking-tight text-neutral-900 dark:text-white">
                  {codeModal.project.title} - Source Code Inspector
                </h2>
              </div>
              <button 
                onClick={() => setCodeModal(prev => ({ ...prev, isOpen: false, project: null, activeFile: null, codeContent: '' }))}
                className="w-8 h-8 rounded-full flex items-center justify-center text-neutral-50 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-grow flex overflow-hidden">
              {/* Sidebar File explorer */}
              <aside className="w-52 bg-gray-50 dark:bg-black border-r border-neutral-200 dark:border-neutral-800 flex flex-col overflow-y-auto shrink-0 select-none">
                <div className="p-3.5 text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest border-b border-neutral-200 dark:border-neutral-800">Explore Files</div>
                <ul className="p-2 space-y-0.5">
                  {codeModal.project.files.map((file, idx) => (
                    <li 
                      key={idx}
                      onClick={() => setCodeModal(prev => ({ ...prev, activeFile: file }))}
                      className={`px-3 py-2 text-xs rounded-xl cursor-pointer transition-all flex items-center gap-2 font-medium ${
                        codeModal.activeFile?.path === file.path 
                          ? 'bg-violet-500/10 text-violet-500 font-semibold' 
                          : 'text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        file.type === 'html' ? 'bg-orange-500' : file.type === 'css' ? 'bg-sky-500' : 'bg-yellow-500'
                      }`} />
                      {file.name}
                    </li>
                  ))}
                </ul>
              </aside>

              {/* Editor Workspace */}
              <main className="flex-grow bg-[#0d1117] flex flex-col overflow-hidden relative">
                {codeModal.isLoading ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-neutral-400 dark:text-neutral-500 bg-[#0d1117]">
                    <Loader2 className="w-8 h-8 animate-spin text-violet-500" />
                    <span className="text-xs font-mono">Fetching file bytes...</span>
                  </div>
                ) : codeModal.error ? (
                  <div className="absolute inset-0 p-8 text-rose-400 font-mono text-xs overflow-auto bg-[#0d1117] flex items-center justify-center text-center">
                    <div>
                      <X className="w-8 h-8 mx-auto mb-2 text-rose-500" />
                      {codeModal.error}
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="px-4 py-2 border-b border-neutral-800/80 bg-[#161b22] text-[11px] font-mono text-neutral-500 flex justify-between items-center select-none">
                      <span>{codeModal.activeFile?.path}</span>
                      <span className="text-[10px] font-semibold text-neutral-600 bg-neutral-800 px-2 py-0.5 rounded">READ ONLY</span>
                    </div>
                    <div className="flex-grow overflow-auto p-6 font-mono text-[12.5px] leading-relaxed text-gray-300">
                      <pre className="m-0 select-text">
                        {renderHighlightedCode(codeModal.codeContent, codeModal.activeFile?.type || '')}
                      </pre>
                    </div>
                  </>
                )}
              </main>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
