(() => {
  const search = document.querySelector('#search');
  const filters = [...document.querySelectorAll('.filter')];
  const grid = document.querySelector('#game-grid');
  const empty = document.querySelector('#empty');
  const emptyTitle = document.querySelector('#empty-title');
  const emptyCopy = document.querySelector('#empty-copy');
  const games = Array.isArray(window.GAMEZONE_GAMES) ? window.GAMEZONE_GAMES : [];
  let active = 'All';
  document.querySelector('#game-count').textContent = String(games.length).padStart(2, '0');
  document.querySelector('#count-label').textContent = `${games.length} GAME${games.length === 1 ? '' : 'S'}`;
  games.forEach((game, index) => {
    const card = document.createElement('a');
    card.className = 'game-card';
    card.href = game.folder || '#';
    card.dataset.name = game.name || 'Untitled game';
    card.dataset.category = game.category || 'Arcade';
    const visual = document.createElement('div');
    visual.className = 'card-visual';
    visual.style.background = `radial-gradient(circle at 50% 50%, ${game.accent || '#5ff4dc'}2c, #11172a)`;
    const idx = document.createElement('span'); idx.className = 'card-index'; idx.textContent = `${String(index + 1).padStart(2, '0')} / ${(game.category || 'ARCADE').toUpperCase()}`;
    const art = document.createElement('span'); art.className = 'art'; art.textContent = game.icon || '🎮'; art.style.color = game.accent || '#5ff4dc';
    const tag = document.createElement('span'); tag.className = 'visual-label'; tag.textContent = game.tagline || 'READY TO PLAY';
    const info = document.createElement('div'); info.className = 'card-info';
    const text = document.createElement('div'); const title = document.createElement('h3'); title.textContent = game.name || 'Untitled game';
    const desc = document.createElement('p'); desc.textContent = game.description || 'A new GameZone challenge.'; text.append(title, desc);
    const arrow = document.createElement('span'); arrow.className = 'card-arrow'; arrow.textContent = '↗'; info.append(text, arrow);
    const meta = document.createElement('div'); meta.className = 'card-meta';
    const controls = document.createElement('span'); controls.textContent = `● ${(game.controls || 'KEYBOARD + TOUCH').toUpperCase()}`;
    const mode = document.createElement('span'); mode.textContent = (game.mode || 'ARCADE').toUpperCase(); meta.append(controls, mode);
    visual.append(idx, art, tag); card.append(visual, info, meta); grid.append(card);
  });
  function update() {
    const term = search.value.trim().toLowerCase(); let shown = 0;
    [...grid.querySelectorAll('.game-card')].forEach(card => {
      const visible = card.dataset.name.toLowerCase().includes(term) && (active === 'All' || card.dataset.category === active);
      card.hidden = !visible; if (visible) shown++;
    });
    empty.hidden = shown !== 0;
    if (games.length === 0) { emptyTitle.textContent = 'Your arcade starts here.'; emptyCopy.textContent = 'The library is ready. We’ll add and test each game in its own folder, one at a time.'; }
    else { emptyTitle.textContent = 'No games found.'; emptyCopy.textContent = 'Try another search or choose a different category.'; }
  }
  filters.forEach(button => button.addEventListener('click', () => { active = button.dataset.filter; filters.forEach(item => item.classList.toggle('active', item === button)); update(); }));
  search.addEventListener('input', update); update();
})();