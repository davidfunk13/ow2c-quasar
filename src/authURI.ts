if (!process.env.AUTH_URI || !process.env.CLIENT_ID || !process.env.AUTH_SCOPE) {
  throw new Error('Environment variables not set correctly.');
}

const authURI = new URL(process.env.AUTH_URI);
authURI.searchParams.append('client_id', process.env.CLIENT_ID);
authURI.searchParams.append('scope', process.env.AUTH_SCOPE);
authURI.searchParams.append('redirect_uri', `${window.location.origin}/authorize`);
authURI.searchParams.append('response_type', 'code');

export default authURI;
