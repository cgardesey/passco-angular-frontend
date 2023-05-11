(function() {
  'use strict';

  angular.module('PastQuestions', ['ui.router', 'Spinner'])
    .controller('TestCtrl', testCtrl)
    .directive("multiLevelDropdownMenu", multiLevelDropdownMenuDirective);


  function testCtrl() {

    var ctrl = this;

    // uncomment to see the model works
    // ctrl.testVar = {id: 'leaf1111', name: 'Leaf 1111'};

    ctrl.options = [{
        id: 'Basic Level',
        name: "Basic Level",
        nodes: [{
            id: 'Basic Level >> Tema Parents',
            name: "Tema Parents",
            nodes: [{
                id: 'Basic Level >> Tema Parents >> English',
                name: "English",
                nodes: [{
                    id: 'Basic Level >> Tema Parents >> English >> 2006',
                    name: "2006",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> English >> 2007',
                    name: "2007",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> English >> 2008',
                    name: "2008",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> English >> 2009',
                    name: "2009",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> English >> 2010',
                    name: "2010",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> English >> 2011',
                    name: "2011",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> English >> 2012',
                    name: "2012",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> English >> 2013',
                    name: "2013",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> English >> 2014',
                    name: "2014",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> English >> 2015',
                    name: "2015",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> English >> 2016',
                    name: "2016",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> English >> 2017',
                    name: "2017",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> English >> 2018',
                    name: "2018",
                    nodes: []
                  }
                ]
              },
              {
                id: 'Basic Level >> Tema Parents >> Mathematics',
                name: "Mathematics",
                nodes: [{
                    id: 'Basic Level >> Tema Parents >> Mathematics >> 2006',
                    name: "2006",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> Mathematics >> 2007',
                    name: "2007",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> Mathematics >> 2008',
                    name: "2008",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> Mathematics >> 2009',
                    name: "2009",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> Mathematics >> 2010',
                    name: "2010",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> Mathematics >> 2011',
                    name: "2011",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> Mathematics >> 2012',
                    name: "2012",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> Mathematics >> 2013',
                    name: "2013",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> Mathematics >> 2014',
                    name: "2014",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> Mathematics >> 2015',
                    name: "2015",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> Mathematics >> 2016',
                    name: "2016",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> Mathematics >> 2017',
                    name: "2017",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> Mathematics >> 2018',
                    name: "2018",
                    nodes: []
                  }
                ]
              },
              {
                id: 'Basic Level >> Tema Parents >> Integrated Science',
                name: "Integrated Science",
                nodes: [{
                    id: 'Basic Level >> Tema Parents >> Integrated Science >> 2006',
                    name: "2006",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> Integrated Science >> 2007',
                    name: "2007",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> Integrated Science >> 2008',
                    name: "2008",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> Integrated Science >> 2009',
                    name: "2009",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> Integrated Science >> 2010',
                    name: "2010",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> Integrated Science >> 2011',
                    name: "2011",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> Integrated Science >> 2012',
                    name: "2012",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> Integrated Science >> 2013',
                    name: "2013",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> Integrated Science >> 2014',
                    name: "2014",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> Integrated Science >> 2015',
                    name: "2015",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> Integrated Science >> 2016',
                    name: "2016",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> Integrated Science >> 2017',
                    name: "2017",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> Integrated Science >> 2018',
                    name: "2018",
                    nodes: []
                  }
                ]
              },
              {
                id: 'Basic Level >> Tema Parents >> ICT',
                name: "ICT",
                nodes: [{
                    id: 'Basic Level >> Tema Parents >> ICT >> 2006',
                    name: "2006",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> ICT >> 2007',
                    name: "2007",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> ICT >> 2008',
                    name: "2008",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> ICT >> 2009',
                    name: "2009",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> ICT >> 2010',
                    name: "2010",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> ICT >> 2011',
                    name: "2011",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> ICT >> 2012',
                    name: "2012",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> ICT >> 2013',
                    name: "2013",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> ICT >> 2014',
                    name: "2014",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> ICT >> 2015',
                    name: "2015",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> ICT >> 2016',
                    name: "2016",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> ICT >> 2017',
                    name: "2017",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> ICT >> 2018',
                    name: "2018",
                    nodes: []
                  }
                ]
              },
              {
                id: 'Basic Level >> Tema Parents >> Social Studies',
                name: "Social Studies",
                nodes: [{
                    id: 'Basic Level >> Tema Parents >> Social Studies >> 2006',
                    name: "2006",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> Social Studies >> 2007',
                    name: "2007",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> Social Studies >> 2008',
                    name: "2008",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> Social Studies >> 2009',
                    name: "2009",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> Social Studies >> 2010',
                    name: "2010",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> Social Studies >> 2011',
                    name: "2011",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> Social Studies >> 2012',
                    name: "2012",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> Social Studies >> 2013',
                    name: "2013",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> Social Studies >> 2014',
                    name: "2014",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> Social Studies >> 2015',
                    name: "2015",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> Social Studies >> 2016',
                    name: "2016",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> Social Studies >> 2017',
                    name: "2017",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> Social Studies >> 2018',
                    name: "2018",
                    nodes: []
                  }
                ]
              },
              {
                id: 'Basic Level >> Tema Parents >> BDT',
                name: "BDT",
                nodes: [{
                    id: 'Basic Level >> Tema Parents >> BDT >> 2006',
                    name: "2006",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> BDT >> 2007',
                    name: "2007",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> BDT >> 2008',
                    name: "2008",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> BDT >> 2009',
                    name: "2009",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> BDT >> 2010',
                    name: "2010",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> BDT >> 2011',
                    name: "2011",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> BDT >> 2012',
                    name: "2012",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> BDT >> 2013',
                    name: "2013",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> BDT >> 2014',
                    name: "2014",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> BDT >> 2015',
                    name: "2015",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> BDT >> 2016',
                    name: "2016",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> BDT >> 2017',
                    name: "2017",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> BDT >> 2018',
                    name: "2018",
                    nodes: []
                  }
                ]
              },
              {
                id: 'Basic Level >> Tema Parents >> French',
                name: "French",
                nodes: [{
                    id: 'Basic Level >> Tema Parents >> French >> 2006',
                    name: "2006",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> French >> 2007',
                    name: "2007",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> French >> 2008',
                    name: "2008",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> French >> 2009',
                    name: "2009",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> French >> 2010',
                    name: "2010",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> French >> 2011',
                    name: "2011",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> French >> 2012',
                    name: "2012",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> French >> 2013',
                    name: "2013",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> French >> 2014',
                    name: "2014",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> French >> 2015',
                    name: "2015",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> French >> 2016',
                    name: "2016",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> French >> 2017',
                    name: "2017",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Tema Parents >> French >> 2018',
                    name: "2018",
                    nodes: []
                  }
                ]
              }
            ]
          },
          {
            id: 'Basic Level >> Corpus Christ',
            name: "Corpus Christ",
            nodes: [{
                id: 'Basic Level >> Corpus Christ >> English',
                name: "English",
                nodes: [{
                    id: 'Basic Level >> Corpus Christ >> English >> 2006',
                    name: "2006",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> English >> 2007',
                    name: "2007",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> English >> 2008',
                    name: "2008",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> English >> 2009',
                    name: "2009",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> English >> 2010',
                    name: "2010",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> English >> 2011',
                    name: "2011",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> English >> 2012',
                    name: "2012",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> English >> 2013',
                    name: "2013",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> English >> 2014',
                    name: "2014",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> English >> 2015',
                    name: "2015",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> English >> 2016',
                    name: "2016",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> English >> 2017',
                    name: "2017",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> English >> 2018',
                    name: "2018",
                    nodes: []
                  }
                ]
              },
              {
                id: 'Basic Level >> Corpus Christ >> Mathematics',
                name: "Mathematics",
                nodes: [{
                    id: 'Basic Level >> Corpus Christ >> Mathematics >> 2006',
                    name: "2006",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> Mathematics >> 2007',
                    name: "2007",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> Mathematics >> 2008',
                    name: "2008",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> Mathematics >> 2009',
                    name: "2009",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> Mathematics >> 2010',
                    name: "2010",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> Mathematics >> 2011',
                    name: "2011",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> Mathematics >> 2012',
                    name: "2012",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> Mathematics >> 2013',
                    name: "2013",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> Mathematics >> 2014',
                    name: "2014",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> Mathematics >> 2015',
                    name: "2015",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> Mathematics >> 2016',
                    name: "2016",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> Mathematics >> 2017',
                    name: "2017",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> Mathematics >> 2018',
                    name: "2018",
                    nodes: []
                  }
                ]
              },
              {
                id: 'Basic Level >> Corpus Christ >> Integrated Science',
                name: "Integrated Science",
                nodes: [{
                    id: 'Basic Level >> Corpus Christ >> Integrated Science >> 2006',
                    name: "2006",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> Integrated Science >> 2007',
                    name: "2007",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> Integrated Science >> 2008',
                    name: "2008",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> Integrated Science >> 2009',
                    name: "2009",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> Integrated Science >> 2010',
                    name: "2010",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> Integrated Science >> 2011',
                    name: "2011",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> Integrated Science >> 2012',
                    name: "2012",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> Integrated Science >> 2013',
                    name: "2013",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> Integrated Science >> 2014',
                    name: "2014",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> Integrated Science >> 2015',
                    name: "2015",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> Integrated Science >> 2016',
                    name: "2016",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> Integrated Science >> 2017',
                    name: "2017",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> Integrated Science >> 2018',
                    name: "2018",
                    nodes: []
                  }
                ]
              },
              {
                id: 'Basic Level >> Corpus Christ >> ICT',
                name: "ICT",
                nodes: [{
                    id: 'Basic Level >> Corpus Christ >> ICT >> 2006',
                    name: "2006",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> ICT >> 2007',
                    name: "2007",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> ICT >> 2008',
                    name: "2008",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> ICT >> 2009',
                    name: "2009",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> ICT >> 2010',
                    name: "2010",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> ICT >> 2011',
                    name: "2011",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> ICT >> 2012',
                    name: "2012",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> ICT >> 2013',
                    name: "2013",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> ICT >> 2014',
                    name: "2014",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> ICT >> 2015',
                    name: "2015",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> ICT >> 2016',
                    name: "2016",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> ICT >> 2017',
                    name: "2017",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> ICT >> 2018',
                    name: "2018",
                    nodes: []
                  }
                ]
              },
              {
                id: 'Basic Level >> Corpus Christ >> Social Studies',
                name: "Social Studies",
                nodes: [{
                    id: 'Basic Level >> Corpus Christ >> Social Studies >> 2006',
                    name: "2006",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> Social Studies >> 2007',
                    name: "2007",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> Social Studies >> 2008',
                    name: "2008",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> Social Studies >> 2009',
                    name: "2009",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> Social Studies >> 2010',
                    name: "2010",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> Social Studies >> 2011',
                    name: "2011",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> Social Studies >> 2012',
                    name: "2012",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> Social Studies >> 2013',
                    name: "2013",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> Social Studies >> 2014',
                    name: "2014",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> Social Studies >> 2015',
                    name: "2015",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> Social Studies >> 2016',
                    name: "2016",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> Social Studies >> 2017',
                    name: "2017",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> Social Studies >> 2018',
                    name: "2018",
                    nodes: []
                  }
                ]
              },
              {
                id: 'Basic Level >> Corpus Christ >> BDT',
                name: "BDT",
                nodes: [{
                    id: 'Basic Level >> Corpus Christ >> BDT >> 2006',
                    name: "2006",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> BDT >> 2007',
                    name: "2007",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> BDT >> 2008',
                    name: "2008",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> BDT >> 2009',
                    name: "2009",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> BDT >> 2010',
                    name: "2010",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> BDT >> 2011',
                    name: "2011",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> BDT >> 2012',
                    name: "2012",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> BDT >> 2013',
                    name: "2013",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> BDT >> 2014',
                    name: "2014",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> BDT >> 2015',
                    name: "2015",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> BDT >> 2016',
                    name: "2016",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> BDT >> 2017',
                    name: "2017",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> BDT >> 2018',
                    name: "2018",
                    nodes: []
                  }
                ]
              },
              {
                id: 'Basic Level >> Corpus Christ >> French',
                name: "French",
                nodes: [{
                    id: 'Basic Level >> Corpus Christ >> French >> 2006',
                    name: "2006",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> French >> 2007',
                    name: "2007",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> French >> 2008',
                    name: "2008",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> French >> 2009',
                    name: "2009",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> French >> 2010',
                    name: "2010",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> French >> 2011',
                    name: "2011",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> French >> 2012',
                    name: "2012",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> French >> 2013',
                    name: "2013",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> French >> 2014',
                    name: "2014",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> French >> 2015',
                    name: "2015",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> French >> 2016',
                    name: "2016",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> French >> 2017',
                    name: "2017",
                    nodes: []
                  },
                  {
                    id: 'Basic Level >> Corpus Christ >> French >> 2018',
                    name: "2018",
                    nodes: []
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'Secondary Level',
        name: "Secondary Level",
        nodes: [{
            id: 'Secondary Level >> PRESEC - Legon',
            name: "PRESEC - Legon",
            nodes: [{
                id: 'Secondary Level >> PRESEC - Legon >> English',
                name: "English",
                nodes: [{
                    id: 'Secondary Level >> PRESEC - Legon >> English >> 2006',
                    name: "2006",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> English >> 2007',
                    name: "2007",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> English >> 2008',
                    name: "2008",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> English >> 2009',
                    name: "2009",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> English >> 2010',
                    name: "2010",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> English >> 2011',
                    name: "2011",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> English >> 2012',
                    name: "2012",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> English >> 2013',
                    name: "2013",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> English >> 2014',
                    name: "2014",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> English >> 2015',
                    name: "2015",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> English >> 2016',
                    name: "2016",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> English >> 2017',
                    name: "2017",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> English >> 2018',
                    name: "2018",
                    nodes: []
                  },

                ]
              },
              {
                id: 'Secondary Level >> PRESEC - Legon >> Core Mathematics',
                name: "Core Mathematics",
                nodes: [{
                    id: 'Secondary Level >> PRESEC - Legon >> Core Mathematics >> 2006',
                    name: "2006",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Core Mathematics >> 2007',
                    name: "2007",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Core Mathematics >> 2008',
                    name: "2008",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Core Mathematics >> 2009',
                    name: "2009",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Core Mathematics >> 2010',
                    name: "2010",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Core Mathematics >> 2011',
                    name: "2011",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Core Mathematics >> 2012',
                    name: "2012",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Core Mathematics >> 2013',
                    name: "2013",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Core Mathematics >> 2014',
                    name: "2014",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Core Mathematics >> 2015',
                    name: "2015",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Core Mathematics >> 2016',
                    name: "2016",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Core Mathematics >> 2017',
                    name: "2017",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Core Mathematics >> 2018',
                    name: "2018",
                    nodes: []
                  }
                ]
              },
              {
                id: 'Secondary Level >> PRESEC - Legon >> Integrated Science',
                name: "Integrated Science",
                nodes: [{
                    id: 'Secondary Level >> PRESEC - Legon >> Integrated Science >> 2006',
                    name: "2006",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Integrated Science >> 2007',
                    name: "2007",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Integrated Science >> 2008',
                    name: "2008",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Integrated Science >> 2009',
                    name: "2009",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Integrated Science >> 2010',
                    name: "2010",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Integrated Science >> 2011',
                    name: "2011",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Integrated Science >> 2012',
                    name: "2012",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Integrated Science >> 2013',
                    name: "2013",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Integrated Science >> 2014',
                    name: "2014",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Integrated Science >> 2015',
                    name: "2015",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Integrated Science >> 2016',
                    name: "2016",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Integrated Science >> 2017',
                    name: "2017",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Integrated Science >> 2018',
                    name: "2018",
                    nodes: []
                  }
                ]
              },
              {
                id: 'Secondary Level >> PRESEC - Legon >> Elective Mathematics',
                name: "Elective Mathematics",
                nodes: [{
                    id: 'Secondary Level >> PRESEC - Legon >> Elective Mathematics >> 2006',
                    name: "2006",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Elective Mathematics >> 2007',
                    name: "2007",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Elective Mathematics >> 2008',
                    name: "2008",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Elective Mathematics >> 2009',
                    name: "2009",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Elective Mathematics >> 2010',
                    name: "2010",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Elective Mathematics >> 2011',
                    name: "2011",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Elective Mathematics >> 2012',
                    name: "2012",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Elective Mathematics >> 2013',
                    name: "2013",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Elective Mathematics >> 2014',
                    name: "2014",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Elective Mathematics >> 2015',
                    name: "2015",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Elective Mathematics >> 2016',
                    name: "2016",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Elective Mathematics >> 2017',
                    name: "2017",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Elective Mathematics >> 2018',
                    name: "2018",
                    nodes: []
                  }
                ]
              },
              {
                id: 'Secondary Level >> PRESEC - Legon >> Chemistry',
                name: "Chemistry",
                nodes: [{
                    id: 'Secondary Level >> PRESEC - Legon >> Chemistry >> 2006',
                    name: "2006",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Chemistry >> 2007',
                    name: "2007",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Chemistry >> 2008',
                    name: "2008",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Chemistry >> 2009',
                    name: "2009",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Chemistry >> 2010',
                    name: "2010",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Chemistry >> 2011',
                    name: "2011",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Chemistry >> 2012',
                    name: "2012",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Chemistry >> 2013',
                    name: "2013",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Chemistry >> 2014',
                    name: "2014",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Chemistry >> 2015',
                    name: "2015",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Chemistry >> 2016',
                    name: "2016",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Chemistry >> 2017',
                    name: "2017",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Chemistry >> 2018',
                    name: "2018",
                    nodes: []
                  }
                ]
              },
              {
                id: 'Secondary Level >> PRESEC - Legon >> Physics',
                name: "Physics",
                nodes: [{
                    id: 'Secondary Level >> PRESEC - Legon >> Physics >> 2006',
                    name: "2006",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Physics >> 2007',
                    name: "2007",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Physics >> 2008',
                    name: "2008",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Physics >> 2009',
                    name: "2009",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Physics >> 2010',
                    name: "2010",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Physics >> 2011',
                    name: "2011",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Physics >> 2012',
                    name: "2012",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Physics >> 2013',
                    name: "2013",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Physics >> 2014',
                    name: "2014",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Physics >> 2015',
                    name: "2015",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Physics >> 2016',
                    name: "2016",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Physics >> 2017',
                    name: "2017",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Physics >> 2018',
                    name: "2018",
                    nodes: []
                  }
                ]
              },
              {
                id: 'Secondary Level >> PRESEC - Legon >> Biology',
                name: "Biology",
                nodes: [{
                    id: 'Secondary Level >> PRESEC - Legon >> Biology >> 2006',
                    name: "2006",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Biology >> 2007',
                    name: "2007",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Biology >> 2008',
                    name: "2008",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Biology >> 2009',
                    name: "2009",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Biology >> 2010',
                    name: "2010",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Biology >> 2011',
                    name: "2011",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Biology >> 2012',
                    name: "2012",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Biology >> 2013',
                    name: "2013",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Biology >> 2014',
                    name: "2014",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Biology >> 2015',
                    name: "2015",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Biology >> 2016',
                    name: "2016",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Biology >> 2017',
                    name: "2017",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Biology >> 2018',
                    name: "2018",
                    nodes: []
                  }
                ]
              },
              {
                id: 'Secondary Level >> PRESEC - Legon >> Economics',
                name: "Economics",
                nodes: [{
                    id: 'Secondary Level >> PRESEC - Legon >> Economics >> 2006',
                    name: "2006",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Economics >> 2007',
                    name: "2007",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Economics >> 2008',
                    name: "2008",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Economics >> 2009',
                    name: "2009",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Economics >> 2010',
                    name: "2010",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Economics >> 2011',
                    name: "2011",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Economics >> 2012',
                    name: "2012",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Economics >> 2013',
                    name: "2013",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Economics >> 2014',
                    name: "2014",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Economics >> 2015',
                    name: "2015",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Economics >> 2016',
                    name: "2016",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Economics >> 2017',
                    name: "2017",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Economics >> 2018',
                    name: "2018",
                    nodes: []
                  }
                ]
              },
              {
                id: 'Secondary Level >> PRESEC - Legon >> Financial Accounting',
                name: "Financial Accounting",
                nodes: [{
                    id: 'Secondary Level >> PRESEC - Legon >> Financial Accounting >> 2006',
                    name: "2006",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Financial Accounting >> 2007',
                    name: "2007",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Financial Accounting >> 2008',
                    name: "2008",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Financial Accounting >> 2009',
                    name: "2009",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Financial Accounting >> 2010',
                    name: "2010",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Financial Accounting >> 2011',
                    name: "2011",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Financial Accounting >> 2012',
                    name: "2012",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Financial Accounting >> 2013',
                    name: "2013",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Financial Accounting >> 2014',
                    name: "2014",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Financial Accounting >> 2015',
                    name: "2015",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Financial Accounting >> 2016',
                    name: "2016",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Financial Accounting >> 2017',
                    name: "2017",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Financial Accounting >> 2018',
                    name: "2018",
                    nodes: []
                  }
                ]
              },
              {
                id: 'Secondary Level >> PRESEC - Legon >> Government',
                name: "Government",
                nodes: [{
                    id: 'Secondary Level >> PRESEC - Legon >> Government >> 2006',
                    name: "2006",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Government >> 2007',
                    name: "2007",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Government >> 2008',
                    name: "2008",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Government >> 2009',
                    name: "2009",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Government >> 2010',
                    name: "2010",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Government >> 2011',
                    name: "2011",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Government >> 2012',
                    name: "2012",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Government >> 2013',
                    name: "2013",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Government >> 2014',
                    name: "2014",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Government >> 2015',
                    name: "2015",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Government >> 2016',
                    name: "2016",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Government >> 2017',
                    name: "2017",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Government >> 2018',
                    name: "2018",
                    nodes: []
                  }
                ]
              },
              {
                id: 'Secondary Level >> PRESEC - Legon >> Geography',
                name: "Geography",
                nodes: [{
                    id: 'Secondary Level >> PRESEC - Legon >> Geography >> 2006',
                    name: "2006",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Geography >> 2007',
                    name: "2007",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Geography >> 2008',
                    name: "2008",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Geography >> 2009',
                    name: "2009",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Geography >> 2010',
                    name: "2010",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Geography >> 2011',
                    name: "2011",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Geography >> 2012',
                    name: "2012",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Geography >> 2013',
                    name: "2013",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Geography >> 2014',
                    name: "2014",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Geography >> 2015',
                    name: "2015",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Geography >> 2016',
                    name: "2016",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Geography >> 2017',
                    name: "2017",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Geography >> 2018',
                    name: "2018",
                    nodes: []
                  }
                ]
              },
              {
                id: 'Secondary Level >> PRESEC - Legon >> Business Management',
                name: "Business Management",
                nodes: [{
                    id: 'Secondary Level >> PRESEC - Legon >> Business Management >> 2006',
                    name: "2006",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Business Management >> 2007',
                    name: "2007",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Business Management >> 2008',
                    name: "2008",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Business Management >> 2009',
                    name: "2009",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Business Management >> 2010',
                    name: "2010",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Business Management >> 2011',
                    name: "2011",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Business Management >> 2012',
                    name: "2012",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Business Management >> 2013',
                    name: "2013",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Business Management >> 2014',
                    name: "2014",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Business Management >> 2015',
                    name: "2015",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Business Management >> 2016',
                    name: "2016",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Business Management >> 2017',
                    name: "2017",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> Business Management >> 2018',
                    name: "2018",
                    nodes: []
                  }
                ]
              },
              {
                id: 'Secondary Level >> PRESEC - Legon >> French',
                name: "French",
                nodes: [{
                    id: 'Secondary Level >> PRESEC - Legon >> French >> 2006',
                    name: "2006",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> French >> 2007',
                    name: "2007",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> French >> 2008',
                    name: "2008",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> French >> 2009',
                    name: "2009",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> French >> 2010',
                    name: "2010",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> French >> 2011',
                    name: "2011",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> French >> 2012',
                    name: "2012",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> French >> 2013',
                    name: "2013",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> French >> 2014',
                    name: "2014",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> French >> 2015',
                    name: "2015",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> French >> 2016',
                    name: "2016",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> French >> 2017',
                    name: "2017",
                    nodes: []
                  },
                  {
                    id: 'Secondary Level >> PRESEC - Legon >> French >> 2018',
                    name: "2018",
                    nodes: []
                  }
                ]
              },
            ]
          }
        ]
      }
    ];
  }

  multiLevelDropdownMenuCtrl.$inject = ['$scope', '$timeout', '$state'];
  function multiLevelDropdownMenuCtrl($scope, $timeout, $state) {

    // $scope.click = function(myPath) {
    //   console.log("dddddddddddddddd");
    //    $state.go('mainList', {path: myPath});
    // };

    $scope.selected = $scope.model || {
      id: 'select...',
      name: 'select...'
    };

    $scope.select = function(node) {
      $timeout(function() {
        $scope.selected = node;
      })
    };

    $scope.$watch('selected', function(newValue) {
      $scope.model = newValue;

      if (newValue.name !== 'select...') {
        $scope.selected = newValue;
        // console.log("selected");
        $state.go('mainList', { path: newValue.id });
      }
      else {
        $state.go('mainList', { path: null });
      }
    });

    $scope.$watch('model', function(newValue) {
      $scope.selected = newValue;
      // $state.go('mainList');
    });
  }

  function multiLevelDropdownMenuDirective() {
    return {
      templateUrl: "src/pastquestions/templates/multi-level-dropdown-menu.html",
      restrict: "E",
      scope: {
        options: "=",
        model: '='
      },
      controller: multiLevelDropdownMenuCtrl,
      controllerAs: 'ctrl'
    };
  }

})();
