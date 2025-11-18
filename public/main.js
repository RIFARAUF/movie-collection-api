// main.js - fetch and render data, with error handling
const btnAll = document.getElementById('btnAll');
const btnClassics = document.getElementById('btnClassics');
const btnGenres = document.getElementById('btnGenres');
const output = document.getElementById('output');

btnAll.addEventListener('click', () => fetchAndRender('/movies', renderMovies));
btnClassics.addEventListener('click', () => fetchAndRender('/movies/classics', renderMovies));
btnGenres.addEventListener('click', () => fetchAndRender('/movies/genres', renderGenres));

// generic fetch + error handling
async function fetchAndRender(url, renderFn) {
  output.innerHTML = '<p>Loading...</p>';
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Request failed: ${res.status} ${res.statusText}`);
    const data = await res.json();
    renderFn(data);
  } catch (err) {
    output.innerHTML = `<p class="error">Error: ${err.message}</p>`;
    console.error(err);
  }
}

function renderMovies(movies) {
  if (!Array.isArray(movies) || movies.length === 0) {
    output.innerHTML = '<p>No movies found.</p>';
    return;
  }
  output.innerHTML = '';
  movies.forEach(m => {
    const div = document.createElement('div');
    div.className = 'movie';
    div.innerHTML = `
      <div class="title">${escapeHtml(m.title)} ${m.isClassic ? '<span class="badge">Classic</span>' : ''}</div>
      <div class="meta">
        <span class="genre">${escapeHtml(m.genre)}</span> • Released: <strong>${m.releaseYear}</strong> • Director: ${escapeHtml(m.director)}
      </div>
    `;
    output.appendChild(div);
  });
}

function renderGenres(data) {
  const genres = data && data.genres ? data.genres : [];
  if (genres.length === 0) {
    output.innerHTML = '<p>No genres found.</p>';
    return;
  }
  output.innerHTML = '';
  genres.forEach(g => {
    const div = document.createElement('div');
    div.className = 'genre-item';
    div.innerHTML = `<div>${escapeHtml(g.name)}</div><div>${g.movieCount} movie(s)</div>`;
    output.appendChild(div);
  });
}

// helper to prevent basic HTML injection
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
