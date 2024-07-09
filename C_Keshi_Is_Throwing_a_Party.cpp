#include <bits/stdc++.h>
using namespace std;
#define all(a) a.begin(), a.end()
#define f(i, n) for (int i = 0; i < n; i++)
#define f1(i, n) for (int i = 1; i < n; i++)
#define int long long
typedef vector<int> vi;
typedef vector<pair<int, int>> vp;
typedef map<int, int> mii;
typedef vector<vi> vvi;
// typedef push_back(x) pb(x);
#define pb push_back

#define fa(v) for (auto &it : (v))
#define ipt(n) \
    int n;     \
    cin >> n
#define ipt2(n, m) \
    int n, m;      \
    cin >> n >> m
#define array(n, a) \
    int a[n];       \
    f(i, n) cin >> a[i]
long long big = 2147483647;
const int mod = 1e9 + 7;
int power(int a, int b, int mod = 1e9 + 7)
{

    int res = 1;

    while (b)
    {
        if (b & 1)
            res = (res * a) % mod;

        a = (a * a) % mod;

        b >>= 1;
    }

    return res % mod;
}
// vi globaldp(1e3 + 10, 1e9);
int can(int x)
{
    // cout << x << endl;
    if (x == 0)
        return -1;
    if (x == 1)
        return 0;
    if (x == 2)
        return 1;

    int l = log2(x);      // Find the position of the most significant bit
    int r = x - (1 << l); // Subtract the largest power of 2 less than or equal to x

    if (can(r) < l - 1)
        return l;
    else
        return l + 1;
}
void solve()
{
    int n;
    cin >> n;
    mii m;
    f(i,n){
        int a,b;
    }
}

signed main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
#ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("output.txt", "w", stdout);
#endif
    int t;
    cin >> t;
    while (t--)
    {
        solve();
    }
}

//  Seive Algorithm  //  O(n*log(log N))  //

// vector<bool> isPrime(N,1);
// isPrime[0]=isPrime[1]=false;
// for(int i=2;i<N;i++){
//     if(isPrime[i]==true){
//         for(int j=2*i;j<N;j+=i){
//             isPrime[j]=false;
//         }
//     }
// }

/*=====================================================================================*/

// Input of undirected graph n->nodes m->edges

// vector<bool> vis(n,0);
// vector<ll> level(n,0);
// vector<vector<ll>> g(n);
// vector<vector<ll>> g(n,vector<ll>(n));

// f(i,m){
//     int v1,v2;
//     cin>>v1>>v2; v1--;v2--;
//     gm[v1][v2]=1;
//     gm[v2][v1]=1;
// }

// f(i,m){
//     int v1,v2;
//     cin>>v1>>v2; v1--;v2--;
//     g[v1].pb(v2);
//     g[v2].pb(v1);
// }

/*=====================================================================================*/

// DFS  O(V+E)

// Graph
// void dfs(ll vertex, vector<bool> &vis, vector<vector<ll>> &g){

//     vis[vertex] = true;
//     for(ll child: g[vertex]){
//         if(vis[child]) continue;

//         dfs(child,vis,g);

//     }

// }

// Tree
// void dfs(ll vertex, ll par=-1,  vector<vector<ll>> &g){

//     for(ll child: g[vertex]){
//         if(child == par) continue;
//         dfs(child,vertex);

//     }

// }

/*=====================================================================================*/

// BFS  O(V+E) {Not recursive ;) }

// void bfs(ll vertex, vector<ll> &level, vector<bool> &vis, vector<vector<ll>> &g){
//     queue<ll> q;
//     q.push(vertex);
//     vis[vertex] = 1;

//     while(!q.empty()){
//         int cur_v = q.front();
//         q.pop();
//         for(int child : g[cur_v]){
//             if(!vis[child]){
//                 q.push(child);
//                 vis[child] = 1;
//                 level[child] = level[cur_v] + 1;
//             }
//         }

//     }
// }