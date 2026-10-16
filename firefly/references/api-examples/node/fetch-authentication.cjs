async function getAccessToken(id, secret) {
  const params = new URLSearchParams();

  params.append("grant_type", "client_credentials");
  params.append("client_id", id);
  params.append("client_secret", secret);
  params.append(
    "scope",
    "openid,AdobeID,read_organizations,firefly_enterprise,firefly_api,ff_apis",
  );

  let resp = await fetch("https://ims-na1.adobelogin.com/ims/token/v3", {
    method: "POST",
    signal: AbortSignal.timeout(60000),
    body: params,
  });

  if (!resp.ok) throw new Error(`Token HTTP ${resp.status}`);
  let data = await resp.json();
  return data.access_token;
}
module.exports = { getAccessToken };
