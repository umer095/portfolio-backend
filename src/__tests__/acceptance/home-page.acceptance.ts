import {Client} from '@loopback/testlab';
import {CmsPortfolioApplication} from '../..'; // ऐप्लिकेशन क्लास इम्पोर्ट
import {setupApplication} from './test-helper';

describe('HomePage', () => {
  let app: CmsPortfolioApplication;
  let client: Client;

  // टेस्ट से पहले एप्लिकेशन और क्लाइंट सेटअप करें
  before('setupApplication', async () => {
    ({app, client} = await setupApplication());
  });

  // सभी टेस्ट्स के बाद एप्लिकेशन बंद करें
  after(async () => {
    await app.stop();
  });

  it('exposes a default home page', async () => {
    await client
      .get('/') // होम पेज का GET रिक्वेस्ट
      .expect(200) // HTTP 200 OK रिस्पॉन्स चाहिए
      .expect('Content-Type', /text\/html/); // रिस्पॉन्स HTML होना चाहिए
  });

  it('exposes self-hosted explorer', async () => {
    await client
      .get('/explorer/') // API एक्सप्लोरर URL
      .expect(200)
      .expect('Content-Type', /text\/html/)
      .expect(/<title>LoopBack API Explorer/); // HTML टाइटल में ये टेक्स्ट होना चाहिए
  });
});
