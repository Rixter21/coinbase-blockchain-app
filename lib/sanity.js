import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'dj4dcauv',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token: 'skGa6UrGwW5nSasroUYvJ259ehKF2fFUaWSkpUEAlNnOtEFxplTWfrU4yjsfYXE22vjVjsSYKIP1J08O164JzigyqQOYvplgaxprUfIkk98SKJGaAOr5ASpl5lbllVcOUN24p3TmU9zya47ddupoDvQeJPTXaGWBJMIqHW9mZ39TQyTBJOOd',
  useCdn: false,
});
