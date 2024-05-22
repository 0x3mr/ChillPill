import { exec } from 'child_process';

export default function handler(req, res) {
  let DEPLOY_SECRET_KEY = "deploy_xd_nowww";

  // Check if the request has the correct secret key
  const secretKey = req.headers['x-deploy-secret'];
  if (secretKey !== DEPLOY_SECRET_KEY) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }

  // Only allow POST requests for security reasons
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  // Execute the deployment script
  exec('/home/ubuntu/ChillPill/pull_run.sh', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      res.status(500).json({ message: 'Deployment failed', error: stderr });
      return;
    }
    console.log(`stdout: ${stdout}`);
    res.status(200).json({ message: 'Deployment successful', output: stdout });
  });
}
