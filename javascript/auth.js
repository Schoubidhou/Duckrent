// URL et clé publique (ANON_KEY) de ton projet Supabase
const SUPABASE_URL = 'https://rwexwwspziqnsxqjvywo.supabase.co'; // Remplace par ton URL Supabase
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ3ZXh3d3NwemlxbnN4cWp2eXdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY2NTcyMjEsImV4cCI6MjA0MjIzMzIyMX0.6HN7gsTgEAyTb9hacQJhsO9sH4jRFkC4-Oa7RllxY6E'; // Remplace par ta clé ANON_KEY

// Initialisation du client Supabase
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Gestion de la soumission du formulaire d'inscription
const signupForm = document.getElementById('signup-form');
signupForm.addEventListener('submit', async (e) => {
  e.preventDefault(); // Empêche la soumission du formulaire classique

  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  const { user, error } = await supabase.auth.signUp({
    email: email,
    password: password
  });

  if (error) {
    console.error('Erreur lors de la création du compte:', error.message);
    alert('Erreur : ' + error.message);
  } else {
    console.log('Compte créé avec succès:', user);
    alert('Compte créé avec succès !');
  }
});

// Gestion de la soumission du formulaire de connexion
const signinForm = document.getElementById('signin-form');
signinForm.addEventListener('submit', async (e) => {
  e.preventDefault(); // Empêche la soumission du formulaire classique

  const email = document.getElementById('signin-email').value;
  const password = document.getElementById('signin-password').value;

  const { user, session, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password
  });

  if (error) {
    console.error('Erreur lors de la connexion:', error.message);
    alert('Erreur : ' + error.message);
  } else {
    console.log('Connexion réussie :', user);
    alert('Connexion réussie !');
    window.location.href = "index.html"; // Rediriger vers l'accueil
  }
});
