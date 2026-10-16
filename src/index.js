// Static files in public/ are served first; this handles everything else.
export default {
  async fetch(request) {
    return new Response('Not found', { status: 404 });
  },
};
