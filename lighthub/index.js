const gamesList = [
  {
    id: "blox-fruits",
    name: "Blox Fruits",
    version: "4.2.0",
    status: "Working",
    features: [
      "Auto Farm Level",
      "Auto Raid",
      "ESP Player/Fruit",
      "Teleports",
      "Devil Fruit Sniper",
      "Auto Quest",
      "Walk on Water",
      "Infinite Energy",
      "No Cooldown",
      "Server Hop"
    ]
  },
  {
    id: "bedwars",
    name: "Bedwars",
    version: "1.5.2",
    status: "Working",
    features: [
      "Kill Aura",
      "Velocity",
      "ESP Bed/Player",
      "Auto Bridge",
      "Nuker",
      "Anti-Void",
      "Chest Stealer",
      "Auto Toxic",
      "Sprint",
      "Fly"
    ]
  },
  {
    id: "da-hood",
    name: "Da Hood",
    version: "2.1.0",
    status: "Maintenance",
    features: [
      "Silent Aim",
      "Fly",
      "Auto Farm Cash",
      "God Mode",
      "Teleport",
      "Anti-Stomp",
      "Auto Buy Armor",
      "Target ESP",
      "Speed Glitch",
      "Server Crasher"
    ]
  },
  {
    id: "pet-sim-99",
    name: "Pet Simulator 99",
    version: "1.0.8",
    status: "Working",
    features: [
      "Auto Farm Coins",
      "Auto Hatch",
      "Auto Upgrade",
      "Gem Farm",
      "Teleport Areas",
      "Auto Rank Up",
      "Auto Free Gifts",
      "Shiny Relic ESP",
      "Balloon Sniper",
      "Hoverboard Speed"
    ]
  },
  {
    id: "blade-ball",
    name: "Blade Ball",
    version: "3.0.1",
    status: "Working",
    features: [
      "Auto Parry",
      "Auto Spam",
      "Visuals",
      "Skin Unlocker",
      "Auto Vote",
      "Ball Predictor",
      "Close Combat Mode",
      "Raging Deflection",
      "Win Farm",
      "AFK Mode"
    ]
  },
  {
    id: "doors",
    name: "Doors",
    version: "1.2.5",
    status: "Working",
    features: [
      "Full Bright",
      "Entity ESP",
      "Auto Loot",
      "Speed Hack",
      "Predictor",
      "Key ESP",
      "Auto Puzzle",
      "No Clip",
      "Instant Interact",
      "God Mode (Bypass)"
    ]
  }
];

// DOM Elements
const contentArea = document.getElementById('content-area');
const desktopNavLinks = document.querySelectorAll('.nav-link');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const closeSidebarBtn = document.getElementById('close-sidebar-btn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

// State
let expandedGames = [];
let searchTerm = "";

// Navigation Logic
function switchTab(tabId) {
  // Helper to update link styles
  const updateLinkStyles = (link) => {
    if (link.dataset.tab === tabId) {
      // Active State
      link.classList.add('active', 'text-primary');
      link.classList.remove('text-muted-foreground', 'hover:text-foreground');
      
      // Add background/border only if it's a mobile link OR if it's desktop (handled differently in styles usually, but we can unify)
      // For desktop:
      if(link.classList.contains('nav-link')) {
         link.classList.add('bg-primary/10', 'border', 'border-primary/20');
         link.classList.remove('hover:bg-white/5');
      }
      // For mobile:
      if(link.classList.contains('mobile-nav-link')) {
         link.classList.add('bg-primary/10', 'border', 'border-primary/20');
         link.classList.remove('hover:bg-white/5');
      }

      const indicator = link.querySelector('.nav-indicator');
      if(indicator) indicator.classList.remove('hidden');
    } else {
      // Inactive State
      link.classList.remove('active', 'text-primary', 'bg-primary/10', 'border', 'border-primary/20');
      link.classList.add('text-muted-foreground', 'hover:text-foreground');
      
      if(link.classList.contains('nav-link')) {
         // link.classList.add('hover:bg-white/5'); // Desktop doesn't have this usually in my code?
      }
       if(link.classList.contains('mobile-nav-link')) {
         link.classList.add('hover:bg-white/5');
      }

      const indicator = link.querySelector('.nav-indicator');
      if(indicator) indicator.classList.add('hidden');
    }
  };

  desktopNavLinks.forEach(updateLinkStyles);
  mobileNavLinks.forEach(updateLinkStyles);

  // Render Content
  renderContent(tabId);
  
  // Close mobile menu if open (and we are on mobile)
  if (window.innerWidth < 768 && !sidebar.classList.contains('translate-x-full')) {
    closeSidebar();
  }
}

function closeSidebar() {
  sidebar.classList.add('translate-x-full');
  overlay.classList.remove('opacity-100', 'pointer-events-auto');
  overlay.classList.add('opacity-0', 'pointer-events-none');
}

function openSidebar() {
  sidebar.classList.remove('translate-x-full');
  overlay.classList.remove('opacity-0', 'pointer-events-none');
  overlay.classList.add('opacity-100', 'pointer-events-auto');
}

// Content Rendering
function renderContent(tabId) {
  contentArea.innerHTML = '';
  contentArea.classList.remove('fade-in');
  void contentArea.offsetWidth; // Trigger reflow
  contentArea.classList.add('fade-in');

  switch(tabId) {
    case 'home':
      renderHome();
      break;
    case 'key-system':
      renderKeySystem();
      break;
    case 'games':
      renderGames();
      break;
    case 'discord':
      renderDiscord();
      break;
  }
  // Re-initialize icons for new content
  lucide.createIcons();
}

// --- Page Renderers ---

function renderHome() {
  contentArea.innerHTML = `
    <div class="flex flex-col items-center text-center gap-6 mt-12 md:mt-24 fade-in-up">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
        </span>
        v2.0 is now live
      </div>
      
      <h1 className="text-5xl md:text-7xl font-display font-black tracking-tight leading-tight">
        DOMINATE <br/>
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-300 to-primary animate-pulse">
          EVERY GAME
        </span>
      </h1>
      
      <p class="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed">
        The most advanced, secure, and undetectable script hub for Roblox. 
        Unlock your full potential with Light Hub's premium features.
      </p>
      
      <div class="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
        <button onclick="switchTab('key-system')" class="w-full sm:w-auto text-lg px-8 py-4 rounded-lg bg-primary text-primary-foreground hover:bg-cyan-400 hover:box-glow transition-all duration-300 font-bold flex items-center justify-center">
          Get Started <i data-lucide="arrow-right" class="ml-2 w-5 h-5"></i>
        </button>
        <button onclick="switchTab('discord')" class="w-full sm:w-auto text-lg px-8 py-4 rounded-lg border border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary transition-all duration-300">
          Join Discord
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 w-full">
        ${[
          { title: "Undetectable", icon: "shield", desc: "Advanced bypass methods keeping you safe." },
          { title: "Fast Execution", icon: "zap", desc: "Optimized Lua environment for 0 latency." },
          { title: "Cloud Scripts", icon: "globe", desc: "Access many scripts instantly." },
          { title: "Custom UI", icon: "terminal", desc: "Beautiful, customizable internal interface." },
        ].map(feature => `
          <div class="bg-card/40 border border-primary/10 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 group rounded-xl p-6 flex flex-col gap-4 text-left">
            <div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
              <i data-lucide="${feature.icon}" class="w-6 h-6"></i>
            </div>
            <div>
              <h3 class="font-display font-bold text-lg mb-1 text-foreground">${feature.title}</h3>
              <p class="text-sm text-muted-foreground">${feature.desc}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderKeySystem() {
  contentArea.innerHTML = `
    <div class="max-w-2xl mx-auto mt-12 fade-in-up">
      <div class="bg-card/50 border border-primary/20 backdrop-blur-md overflow-hidden relative rounded-xl">
        <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
        
        <div class="text-center pb-2 p-8">
          <div class="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 mx-auto flex items-center justify-center mb-4">
            <i data-lucide="key" class="w-8 h-8 text-primary"></i>
          </div>
          <h2 class="font-display text-3xl font-bold mb-2 text-foreground">Key System Access</h2>
          <p class="text-lg text-muted-foreground">
            Light Hub uses a key system to maintain quality and security.
          </p>
        </div>

        <div class="space-y-8 p-8 pt-0">
          <div class="bg-primary/5 border border-primary/10 rounded-lg p-6 space-y-4">
            <div class="flex items-start gap-4">
              <i data-lucide="info" class="w-6 h-6 text-primary shrink-0 mt-1"></i>
              <div class="space-y-2">
                <h3 class="font-bold text-lg text-foreground">How it works</h3>
                <p class="text-muted-foreground leading-relaxed">
                  To use Light Hub, you need a valid access key. Keys are valid for 24 hours. 
                  Click the button below to be redirected to our key provider. You will need to complete 
                  a short verification process to generate your unique key.
                </p>
              </div>
            </div>
          </div>

          <div class="flex flex-col items-center gap-4">
            <button 
              onclick="window.open('https://linkvertise.com', '_blank')"
              class="w-full md:w-auto min-w-[200px] h-14 text-lg font-bold rounded-lg bg-primary hover:bg-cyan-400 text-primary-foreground hover:box-glow transition-all duration-300 flex items-center justify-center"
            >
              Get Key <i data-lucide="external-link" class="ml-2 w-5 h-5"></i>
            </button>
            <p class="text-xs text-muted-foreground text-center max-w-sm">
              By clicking "Get Key", you will be redirected to a third-party website. 
              Please ensure you have your ad-blocker disabled for the smoothest experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderDiscord() {
  contentArea.innerHTML = `
    <div class="flex items-center justify-center min-h-[60vh] fade-in-up">
      <div class="w-full max-w-2xl bg-[#5865F2]/5 border border-[#5865F2]/20 backdrop-blur-md overflow-hidden rounded-xl">
        <div class="flex flex-col md:flex-row">
          <div class="bg-[#5865F2] p-10 md:w-2/5 flex flex-col items-center justify-center text-center">
            <i data-lucide="disc" class="w-24 h-24 text-white mb-6"></i>
            <h2 class="text-2xl font-display font-bold text-white">Join Us</h2>
          </div>
          
          <div class="p-10 md:w-3/5 flex flex-col justify-center space-y-6">
            <div>
              <h3 class="text-2xl font-bold mb-3 text-foreground">Connect with our amazing community</h3>
              <p class="text-muted-foreground leading-relaxed">
                Join the Light Hub Discord server to get the latest updates, 
                request new game scripts, get 24/7 support, and chat with 
                thousands of other users. We host daily giveaways and events!
              </p>
            </div>

            <button 
              onclick="window.open('https://discord.gg', '_blank')"
              class="w-full h-12 text-lg font-bold rounded-lg bg-[#5865F2] hover:bg-[#4752C4] text-white transition-all duration-300 shadow-lg shadow-[#5865F2]/20 flex items-center justify-center"
            >
              Join Discord Server <i data-lucide="external-link" class="ml-2 w-5 h-5"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderGames() {
  const filtered = gamesList.filter(game => game.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const gamesHTML = filtered.map(game => {
    const isExpanded = expandedGames.includes(game.id);
    const visibleFeatures = isExpanded ? game.features : game.features.slice(0, 5);
    const hasMoreFeatures = game.features.length > 5;
    
    const statusColor = game.status === 'Working' ? 'green' : (game.status === 'Patched' ? 'red' : 'yellow');
    const statusBadge = `
      <span class="border-0 font-mono px-3 py-1 shadow-lg backdrop-blur-md rounded-full text-xs font-semibold flex items-center gap-1.5
        bg-${statusColor}-500/20 text-${statusColor}-400 ring-1 ring-${statusColor}-500/30">
        <i data-lucide="${game.status === 'Working' ? 'check-circle-2' : 'alert-circle'}" class="w-3.5 h-3.5"></i>
        ${game.status}
      </span>
    `;

    const featuresHTML = visibleFeatures.map(feature => `
      <li class="text-sm text-gray-300 flex items-start gap-3 group/item">
        <span class="w-1.5 h-1.5 rounded-full bg-primary/40 mt-1.5 group-hover/item:bg-primary group-hover/item:shadow-[0_0_8px_rgba(6,182,212,0.8)] transition-all duration-300"></span>
        <span class="group-hover/item:text-white transition-colors duration-300 leading-tight">${feature}</span>
      </li>
    `).join('');

    return `
      <div class="group relative h-full rounded-2xl overflow-hidden bg-card/30 border border-white/5 hover:border-primary/40 transition-all duration-500 flex flex-col backdrop-blur-md shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
        <!-- Glowing Border Effect -->
        <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5 group-hover:ring-primary/30 transition-all duration-500 pointer-events-none"></div>
        <div class="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-500 pointer-events-none"></div>

        <!-- Header -->
        <div class="p-6 border-b border-white/5 bg-gradient-to-b from-white/5 to-transparent relative z-10">
          <div class="flex justify-between items-start mb-3">
            <h3 class="font-display font-bold text-2xl text-white group-hover:text-primary transition-colors tracking-wide">
              ${game.name}
            </h3>
            ${statusBadge}
          </div>
          <div class="flex items-center gap-2">
            <span class="bg-white/5 hover:bg-white/10 text-muted-foreground font-mono text-xs px-2.5 py-0.5 rounded-full transition-colors">
              v${game.version}
            </span>
            <span class="text-xs text-muted-foreground font-medium px-2 py-0.5 rounded-full bg-primary/5 border border-primary/10 text-primary">
              Lua Optimized
            </span>
          </div>
        </div>
        
        <!-- Features List -->
        <div class="p-6 flex-grow bg-black/20 relative z-10">
          <h4 class="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4 flex items-center gap-2 opacity-80">
            <i data-lucide="terminal" class="w-3.5 h-3.5 text-primary"></i> Script Features
          </h4>
          <ul class="space-y-3 mb-2">
            ${featuresHTML}
          </ul>
          
          ${!isExpanded && hasMoreFeatures ? `
            <div class="mt-2 pt-2 text-xs text-muted-foreground italic opacity-60 pl-4 border-l border-white/10">
              + ${game.features.length - 5} more hidden features...
            </div>
          ` : ''}
        </div>
        
        <!-- Action -->
        <div class="p-4 border-t border-white/5 bg-white/5 relative z-10">
          ${hasMoreFeatures ? `
            <button 
              onclick="toggleGameExpand('${game.id}')"
              class="w-full py-2 rounded-md flex items-center justify-center text-sm font-medium hover:bg-primary/10 hover:text-primary transition-all duration-300 group/btn text-foreground"
            >
              ${isExpanded ? 
                `Show Less <i data-lucide="chevron-up" class="ml-2 w-4 h-4"></i>` : 
                `View Details <i data-lucide="chevron-down" class="ml-2 w-4 h-4 group-hover/btn:translate-y-0.5 transition-transform"></i>`
              }
            </button>
          ` : `
             <button disabled class="w-full py-2 rounded-md flex items-center justify-center text-sm font-medium opacity-50 cursor-not-allowed text-foreground">
                No More Details
             </button>
          `}
        </div>
      </div>
    `;
  }).join('');

  contentArea.innerHTML = `
    <div class="space-y-12 pb-20 fade-in-up">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        <div class="relative">
          <div class="absolute -left-10 -top-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
          <h1 class="text-4xl font-display font-bold mb-2 text-glow text-foreground">Supported Games</h1>
          <p class="text-muted-foreground text-lg">
            Browse our collection of <span class="text-primary font-bold">${gamesList.length}+</span> supported games with premium features.
          </p>
        </div>
        <div class="relative w-full md:w-80 group">
          <div class="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-20 group-hover:opacity-50 transition duration-500"></div>
          <div class="relative flex items-center">
            <i data-lucide="search" class="absolute left-3 text-muted-foreground w-4 h-4 group-hover:text-primary transition-colors z-10"></i>
            <input 
              type="text"
              placeholder="Search games..." 
              class="w-full pl-10 pr-4 bg-background/80 border border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary h-12 rounded-lg backdrop-blur-xl transition-all duration-300 text-foreground placeholder:text-muted-foreground relative z-0"
              value="${searchTerm}"
              oninput="handleSearch(this.value)"
              autofocus
            />
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        ${filtered.length > 0 ? gamesHTML : `
          <div class="col-span-full text-center py-20">
            <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 mb-4">
              <i data-lucide="search" class="w-8 h-8 text-muted-foreground"></i>
            </div>
            <h3 class="text-xl font-bold text-white mb-2">No games found</h3>
            <p class="text-muted-foreground">Try searching for a different game name.</p>
          </div>
        `}
      </div>
    </div>
  `;
  
  // Need to re-focus input if it was just typed in
  const input = contentArea.querySelector('input');
  if(input) {
    input.focus();
    // Move cursor to end
    const val = input.value;
    input.value = '';
    input.value = val;
  }
  lucide.createIcons();
}

function toggleGameExpand(gameId) {
  if (expandedGames.includes(gameId)) {
    expandedGames = expandedGames.filter(id => id !== gameId);
  } else {
    expandedGames.push(gameId);
  }
  renderGames();
}

function handleSearch(value) {
  searchTerm = value;
  renderGames();
}

// Event Listeners
desktopNavLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const tabId = link.dataset.tab;
    switchTab(tabId);
  });
});

mobileNavLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const tabId = link.dataset.tab;
    switchTab(tabId);
  });
});

mobileMenuBtn.addEventListener('click', openSidebar);
if(closeSidebarBtn) closeSidebarBtn.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  switchTab('home');
  lucide.createIcons();
});
