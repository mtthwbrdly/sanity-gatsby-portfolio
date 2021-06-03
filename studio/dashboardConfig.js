export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60b8b84f0e3e04fd99c66cf1',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-kxouqbrs',
                  apiId: '3abc4b6b-821c-4768-884b-ff39558ed764'
                },
                {
                  buildHookId: '60b8b84fcd21fe2cc4ccf1f8',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-k4mtq5wr',
                  apiId: '09965ac1-2d79-47d6-9e09-b7fe12bcad24'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mtthwbrdly/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-k4mtq5wr.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
