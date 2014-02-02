function DataPoints(name, data) {
    this.name = name;
    this.data = data;
}
DataPoints.prototype.getName = function() {
   return this.name;
}
DataPoints.prototype.getData = function() {
   return this.data;
}
var global_warming = new DataPoints('Global Warming',
[['Year', 'Popularity'],
[2004.01, 24],[2004.03, 30],[2004.05, 24],[2004.07, 22],[2004.09, 26],[2004.11, 25],[2004.12, 24],[2004.14, 37],[2004.16, 34],[2004.19, 23],[2004.21, 29],[2004.22, 26],[2004.24, 27],[2004.26, 22],[2004.28, 21],[2004.30, 27],[2004.32, 29],[2004.34, 30],[2004.36, 27],[2004.38, 28],[2004.40, 29],[2004.42, 31],[2004.43, 24],[2004.45, 19],[2004.47, 18],[2004.49, 13],[2004.51, 14],[2004.53, 10],[2004.55, 11],[2004.57, 11],[2004.59, 11],[2004.61, 13],[2004.62, 11],[2004.64, 14],[2004.66, 14],[2004.68, 19],[2004.70, 23],[2004.72, 25],[2004.74, 28],[2004.76, 25],[2004.78, 28],[2004.80, 30],[2004.82, 30],[2004.83, 32],[2004.85, 32],[2004.87, 43],[2004.89, 29],[2004.91, 35],[2004.93, 36],[2004.95, 29],[2004.97, 15],[2004.99, 14],[2005.01, 25],[2005.02, 33],[2005.04, 26],[2005.06, 32],[2005.08, 31],[2005.10, 33],[2005.12, 31],[2005.14, 33],[2005.16, 32],[2005.18, 30],[2005.20, 30],[2005.22, 24],[2005.24, 21],[2005.26, 24],[2005.28, 27],[2005.30, 30],[2005.32, 31],[2005.34, 28],[2005.36, 28],[2005.37, 26],[2005.39, 26],[2005.41, 20],[2005.43, 27],[2005.45, 24],[2005.47, 19],[2005.49, 17],[2005.51, 17],[2005.53, 16],[2005.55, 14],[2005.57, 14],[2005.58, 13],[2005.60, 14],[2005.62, 13],[2005.64, 12],[2005.66, 25],[2005.68, 23],[2005.70, 24],[2005.72, 38],[2005.74, 35],[2005.76, 29],[2005.77, 32],[2005.79, 31],[2005.81, 32],[2005.83, 35],[2005.85, 32],[2005.87, 38],[2005.89, 32],[2005.91, 37],[2005.93, 36],[2005.95, 28],[2005.97, 16],[2005.99, 11],[2006.00, 20],[2006.02, 26],[2006.04, 27],[2006.06, 27],[2006.08, 35],[2006.10, 32],[2006.12, 29],[2006.14, 30],[2006.15, 33],[2006.18, 31],[2006.20, 29],[2006.22, 37],[2006.24, 44],[2006.26, 38],[2006.27, 32],[2006.29, 40],[2006.31, 44],[2006.33, 39],[2006.35, 36],[2006.37, 37],[2006.39, 40],[2006.41, 34],[2006.43, 37],[2006.45, 33],[2006.47, 31],[2006.49, 32],[2006.51, 25],[2006.52, 25],[2006.54, 33],[2006.56, 31],[2006.58, 32],[2006.60, 21],[2006.62, 17],[2006.64, 17],[2006.66, 23],[2006.67, 26],[2006.69, 32],[2006.71, 35],[2006.73, 40],[2006.75, 38],[2006.77, 37],[2006.79, 37],[2006.81, 35],[2006.83, 52],[2006.85, 48],[2006.87, 48],[2006.89, 40],[2006.90, 55],[2006.92, 55],[2006.94, 54],[2006.96, 38],[2006.98, 28],[2007.00, 56],[2007.02, 68],[2007.04, 64],[2007.06, 68],[2007.08, 95],[2007.09, 96],[2007.11, 78],[2007.13, 67],[2007.15, 85],[2007.18, 89],[2007.20, 100],[2007.22, 89],[2007.24, 80],[2007.25, 80],[2007.27, 88],[2007.29, 85],[2007.31, 94],[2007.33, 89],[2007.35, 75],[2007.37, 78],[2007.39, 71],[2007.41, 58],[2007.42, 63],[2007.44, 49],[2007.46, 41],[2007.48, 40],[2007.50, 42],[2007.52, 51],[2007.54, 40],[2007.56, 34],[2007.58, 31],[2007.60, 36],[2007.62, 34],[2007.64, 35],[2007.65, 35],[2007.67, 39],[2007.69, 47],[2007.71, 46],[2007.73, 52],[2007.75, 51],[2007.77, 57],[2007.79, 60],[2007.81, 59],[2007.83, 58],[2007.84, 63],[2007.86, 67],[2007.88, 59],[2007.90, 71],[2007.92, 72],[2007.94, 67],[2007.96, 50],[2007.98, 25],[2008.00, 34],[2008.02, 52],[2008.04, 51],[2008.05, 51],[2008.07, 52],[2008.09, 51],[2008.11, 51],[2008.13, 47],[2008.15, 57],[2008.17, 58],[2008.19, 54],[2008.21, 43],[2008.23, 49],[2008.25, 54],[2008.27, 55],[2008.29, 58],[2008.30, 65],[2008.32, 62],[2008.34, 57],[2008.36, 58],[2008.38, 55],[2008.40, 44],[2008.42, 48],[2008.44, 39],[2008.46, 35],[2008.48, 35],[2008.50, 29],[2008.52, 29],[2008.54, 28],[2008.55, 30],[2008.57, 25],[2008.59, 25],[2008.61, 23],[2008.63, 24],[2008.65, 26],[2008.67, 32],[2008.69, 37],[2008.71, 37],[2008.72, 38],[2008.74, 37],[2008.76, 38],[2008.78, 38],[2008.80, 41],[2008.82, 40],[2008.84, 43],[2008.86, 44],[2008.88, 46],[2008.90, 36],[2008.92, 45],[2008.94, 44],[2008.96, 37],[2008.97, 19],[2008.99, 19],[2009.01, 33],[2009.03, 39],[2009.05, 35],[2009.07, 39],[2009.09, 37],[2009.11, 37],[2009.12, 32],[2009.14, 38],[2009.17, 39],[2009.19, 39],[2009.21, 37],[2009.23, 39],[2009.25, 41],[2009.26, 33],[2009.28, 34],[2009.30, 51],[2009.32, 44],[2009.34, 40],[2009.36, 39],[2009.38, 37],[2009.40, 33],[2009.42, 32],[2009.44, 29],[2009.46, 26],[2009.47, 24],[2009.49, 24],[2009.51, 23],[2009.53, 21],[2009.55, 20],[2009.57, 20],[2009.59, 19],[2009.61, 19],[2009.63, 18],[2009.65, 20],[2009.67, 21],[2009.68, 25],[2009.70, 28],[2009.72, 31],[2009.74, 30],[2009.76, 33],[2009.78, 36],[2009.80, 40],[2009.82, 37],[2009.84, 39],[2009.86, 38],[2009.87, 44],[2009.89, 58],[2009.91, 66],[2009.93, 66],[2009.95, 53],[2009.97, 31],[2009.99, 24],[2010.01, 44],[2010.03, 41],[2010.05, 38],[2010.07, 36],[2010.08, 37],[2010.10, 42],[2010.12, 39],[2010.14, 38],[2010.16, 38],[2010.19, 34],[2010.21, 32],[2010.22, 33],[2010.24, 29],[2010.26, 27],[2010.28, 32],[2010.30, 37],[2010.32, 35],[2010.34, 31],[2010.36, 31],[2010.38, 30],[2010.40, 26],[2010.42, 24],[2010.43, 23],[2010.45, 19],[2010.47, 18],[2010.49, 17],[2010.51, 16],[2010.53, 15],[2010.55, 16],[2010.57, 16],[2010.59, 15],[2010.61, 15],[2010.62, 16],[2010.64, 15],[2010.66, 17],[2010.68, 16],[2010.70, 19],[2010.72, 21],[2010.74, 22],[2010.76, 24],[2010.78, 25],[2010.80, 24],[2010.82, 21],[2010.83, 24],[2010.85, 25],[2010.87, 25],[2010.89, 22],[2010.91, 27],[2010.93, 28],[2010.95, 22],[2010.97, 14],[2010.99, 15],[2011.01, 20],[2011.02, 23],[2011.04, 25],[2011.06, 23],[2011.08, 28],[2011.10, 26],[2011.12, 23],[2011.14, 22],[2011.16, 25],[2011.18, 24],[2011.20, 22],[2011.22, 23],[2011.24, 21],[2011.26, 22],[2011.28, 19],[2011.30, 19],[2011.32, 21],[2011.34, 22],[2011.36, 23],[2011.37, 21],[2011.39, 22],[2011.41, 18],[2011.43, 19],[2011.45, 17],[2011.47, 16],[2011.49, 15],[2011.51, 14],[2011.53, 14],[2011.55, 14],[2011.57, 14],[2011.58, 14],[2011.60, 13],[2011.62, 14],[2011.64, 15],[2011.66, 16],[2011.68, 17],[2011.70, 20],[2011.72, 20],[2011.74, 20],[2011.76, 19],[2011.77, 21],[2011.79, 21],[2011.81, 20],[2011.83, 23],[2011.85, 22],[2011.87, 24],[2011.89, 21],[2011.91, 25],[2011.93, 24],[2011.95, 21],[2011.97, 14],[2011.99, 12],[2012.00, 19],[2012.02, 21],[2012.04, 21],[2012.06, 21],[2012.08, 25],[2012.10, 23],[2012.12, 20],[2012.14, 23],[2012.15, 24],[2012.18, 23],[2012.20, 22],[2012.22, 21],[2012.24, 19],[2012.25, 14],[2012.27, 14],[2012.29, 19],[2012.31, 19],[2012.33, 20],[2012.35, 17],[2012.37, 18],[2012.39, 16],[2012.41, 16],[2012.42, 14],[2012.44, 12],[2012.46, 12],[2012.48, 12],[2012.50, 13],[2012.52, 12],[2012.54, 11],[2012.56, 11],[2012.58, 11],[2012.60, 11],[2012.62, 10],[2012.64, 11],[2012.65, 12],[2012.67, 14],[2012.69, 15],[2012.71, 15],[2012.73, 16],[2012.75, 16],[2012.77, 15],[2012.79, 17],[2012.81, 16],[2012.83, 19],[2012.84, 18],[2012.86, 19],[2012.88, 20],[2012.90, 21],[2012.92, 21],[2012.94, 18],[2012.96, 13],[2012.98, 8],[2013.00, 10],[2013.02, 15],[2013.04, 16],[2013.05, 15],[2013.07, 16],[2013.09, 16],[2013.11, 16],[2013.13, 15],[2013.15, 17],[2013.17, 17],[2013.19, 16],[2013.21, 15],[2013.23, 12],[2013.25, 13],[2013.27, 16],[2013.29, 16],[2013.31, 18],[2013.33, 18],[2013.35, 16],[2013.37, 17],[2013.39, 16],[2013.40, 14],[2013.42, 13],[2013.44, 12],[2013.46, 11],[2013.48, 11],[2013.50, 10],[2013.52, 9],[2013.54, 9],[2013.56, 9],[2013.58, 9],[2013.59, 9],[2013.61, 9],[2013.63, 9],[2013.65, 10],[2013.67, 11],[2013.69, 12],[2013.71, 13],[2013.73, 15],[2013.75, 14],[2013.77, 14],[2013.79, 14],[2013.80, 14],[2013.82, 13],[2013.84, 15],[2013.86, 16],[2013.88, 16],[2013.90, 14],[2013.92, 16],[2013.94, 15],[2013.96, 12],[2013.98, 7],[2014.00, 11],[2014.01, 21],[2014.03, 15],[2014.05, 15],[2014.07, 17]]);

var mayan_calendar = new DataPoints('Mayan Calendar',
[['Year', 'Popularity'],
[2004.01, 1],[2004.03, 1],[2004.05, 1],[2004.07, 1],[2004.09, 1],[2004.11, 1],[2004.12, 1],[2004.14, 1],[2004.16, 1],[2004.19, 1],[2004.21, 1],[2004.22, 1],[2004.24, 1],[2004.26, 1],[2004.28, 1],[2004.30, 1],[2004.32, 1],[2004.34, 1],[2004.36, 0],[2004.38, 1],[2004.40, 1],[2004.42, 1],[2004.43, 1],[2004.45, 1],[2004.47, 0],[2004.49, 1],[2004.51, 1],[2004.53, 1],[2004.55, 1],[2004.57, 1],[2004.59, 1],[2004.61, 0],[2004.62, 1],[2004.64, 1],[2004.66, 1],[2004.68, 1],[2004.70, 1],[2004.72, 1],[2004.74, 1],[2004.76, 1],[2004.78, 1],[2004.80, 1],[2004.82, 1],[2004.83, 1],[2004.85, 1],[2004.87, 1],[2004.89, 1],[2004.91, 1],[2004.93, 1],[2004.95, 1],[2004.97, 1],[2004.99, 1],[2005.01, 1],[2005.02, 1],[2005.04, 1],[2005.06, 1],[2005.08, 1],[2005.10, 1],[2005.12, 1],[2005.14, 1],[2005.16, 1],[2005.18, 0],[2005.20, 1],[2005.22, 1],[2005.24, 1],[2005.26, 1],[2005.28, 1],[2005.30, 1],[2005.32, 1],[2005.34, 1],[2005.36, 1],[2005.37, 1],[2005.39, 0],[2005.41, 0],[2005.43, 1],[2005.45, 1],[2005.47, 0],[2005.49, 1],[2005.51, 1],[2005.53, 0],[2005.55, 0],[2005.57, 1],[2005.58, 0],[2005.60, 1],[2005.62, 0],[2005.64, 1],[2005.66, 0],[2005.68, 1],[2005.70, 1],[2005.72, 1],[2005.74, 1],[2005.76, 1],[2005.77, 1],[2005.79, 1],[2005.81, 1],[2005.83, 1],[2005.85, 1],[2005.87, 1],[2005.89, 1],[2005.91, 1],[2005.93, 1],[2005.95, 1],[2005.97, 1],[2005.99, 1],[2006.00, 1],[2006.02, 1],[2006.04, 1],[2006.06, 1],[2006.08, 1],[2006.10, 1],[2006.12, 1],[2006.14, 1],[2006.15, 1],[2006.18, 1],[2006.20, 1],[2006.22, 1],[2006.24, 1],[2006.26, 1],[2006.27, 1],[2006.29, 1],[2006.31, 1],[2006.33, 1],[2006.35, 1],[2006.37, 1],[2006.39, 1],[2006.41, 1],[2006.43, 1],[2006.45, 0],[2006.47, 1],[2006.49, 0],[2006.51, 0],[2006.52, 0],[2006.54, 1],[2006.56, 1],[2006.58, 1],[2006.60, 1],[2006.62, 1],[2006.64, 1],[2006.66, 1],[2006.67, 0],[2006.69, 1],[2006.71, 1],[2006.73, 1],[2006.75, 1],[2006.77, 1],[2006.79, 1],[2006.81, 1],[2006.83, 1],[2006.85, 1],[2006.87, 1],[2006.89, 1],[2006.90, 1],[2006.92, 1],[2006.94, 1],[2006.96, 1],[2006.98, 1],[2007.00, 2],[2007.02, 1],[2007.04, 1],[2007.06, 1],[2007.08, 1],[2007.09, 1],[2007.11, 1],[2007.13, 1],[2007.15, 1],[2007.18, 1],[2007.20, 1],[2007.22, 1],[2007.24, 1],[2007.25, 1],[2007.27, 1],[2007.29, 1],[2007.31, 1],[2007.33, 1],[2007.35, 1],[2007.37, 1],[2007.39, 1],[2007.41, 1],[2007.42, 1],[2007.44, 1],[2007.46, 1],[2007.48, 1],[2007.50, 1],[2007.52, 1],[2007.54, 1],[2007.56, 1],[2007.58, 1],[2007.60, 1],[2007.62, 1],[2007.64, 1],[2007.65, 1],[2007.67, 1],[2007.69, 1],[2007.71, 1],[2007.73, 1],[2007.75, 1],[2007.77, 1],[2007.79, 1],[2007.81, 1],[2007.83, 2],[2007.84, 1],[2007.86, 1],[2007.88, 2],[2007.90, 1],[2007.92, 1],[2007.94, 1],[2007.96, 1],[2007.98, 1],[2008.00, 1],[2008.02, 1],[2008.04, 1],[2008.05, 2],[2008.07, 2],[2008.09, 1],[2008.11, 1],[2008.13, 1],[2008.15, 1],[2008.17, 1],[2008.19, 1],[2008.21, 1],[2008.23, 1],[2008.25, 1],[2008.27, 1],[2008.29, 1],[2008.30, 1],[2008.32, 1],[2008.34, 1],[2008.36, 1],[2008.38, 2],[2008.40, 1],[2008.42, 1],[2008.44, 1],[2008.46, 1],[2008.48, 2],[2008.50, 1],[2008.52, 1],[2008.54, 1],[2008.55, 2],[2008.57, 1],[2008.59, 1],[2008.61, 1],[2008.63, 1],[2008.65, 1],[2008.67, 1],[2008.69, 2],[2008.71, 2],[2008.72, 2],[2008.74, 2],[2008.76, 2],[2008.78, 2],[2008.80, 2],[2008.82, 2],[2008.84, 3],[2008.86, 2],[2008.88, 2],[2008.90, 2],[2008.92, 2],[2008.94, 2],[2008.96, 2],[2008.97, 2],[2008.99, 3],[2009.01, 3],[2009.03, 3],[2009.05, 2],[2009.07, 2],[2009.09, 2],[2009.11, 2],[2009.12, 2],[2009.14, 2],[2009.17, 2],[2009.19, 2],[2009.21, 2],[2009.23, 2],[2009.25, 2],[2009.26, 2],[2009.28, 2],[2009.30, 2],[2009.32, 2],[2009.34, 2],[2009.36, 1],[2009.38, 2],[2009.40, 2],[2009.42, 1],[2009.44, 1],[2009.46, 2],[2009.47, 2],[2009.49, 2],[2009.51, 2],[2009.53, 2],[2009.55, 2],[2009.57, 2],[2009.59, 2],[2009.61, 2],[2009.63, 2],[2009.65, 2],[2009.67, 3],[2009.68, 3],[2009.70, 2],[2009.72, 3],[2009.74, 4],[2009.76, 5],[2009.78, 5],[2009.80, 4],[2009.82, 4],[2009.84, 5],[2009.86, 11],[2009.87, 10],[2009.89, 5],[2009.91, 4],[2009.93, 3],[2009.95, 3],[2009.97, 3],[2009.99, 4],[2010.01, 3],[2010.03, 3],[2010.05, 2],[2010.07, 2],[2010.08, 2],[2010.10, 2],[2010.12, 2],[2010.14, 2],[2010.16, 3],[2010.19, 3],[2010.21, 2],[2010.22, 2],[2010.24, 2],[2010.26, 2],[2010.28, 2],[2010.30, 2],[2010.32, 2],[2010.34, 2],[2010.36, 1],[2010.38, 1],[2010.40, 1],[2010.42, 1],[2010.43, 1],[2010.45, 1],[2010.47, 1],[2010.49, 1],[2010.51, 1],[2010.53, 1],[2010.55, 2],[2010.57, 1],[2010.59, 1],[2010.61, 1],[2010.62, 1],[2010.64, 1],[2010.66, 1],[2010.68, 1],[2010.70, 1],[2010.72, 1],[2010.74, 1],[2010.76, 1],[2010.78, 1],[2010.80, 2],[2010.82, 2],[2010.83, 2],[2010.85, 1],[2010.87, 2],[2010.89, 1],[2010.91, 1],[2010.93, 2],[2010.95, 2],[2010.97, 2],[2010.99, 3],[2011.01, 5],[2011.02, 3],[2011.04, 3],[2011.06, 2],[2011.08, 2],[2011.10, 2],[2011.12, 2],[2011.14, 2],[2011.16, 2],[2011.18, 4],[2011.20, 7],[2011.22, 4],[2011.24, 2],[2011.26, 2],[2011.28, 2],[2011.30, 2],[2011.32, 2],[2011.34, 2],[2011.36, 2],[2011.37, 6],[2011.39, 4],[2011.41, 1],[2011.43, 1],[2011.45, 1],[2011.47, 1],[2011.49, 1],[2011.51, 1],[2011.53, 1],[2011.55, 1],[2011.57, 1],[2011.58, 1],[2011.60, 1],[2011.62, 1],[2011.64, 2],[2011.66, 2],[2011.68, 2],[2011.70, 2],[2011.72, 2],[2011.74, 2],[2011.76, 2],[2011.77, 2],[2011.79, 2],[2011.81, 3],[2011.83, 2],[2011.85, 3],[2011.87, 2],[2011.89, 2],[2011.91, 2],[2011.93, 2],[2011.95, 3],[2011.97, 6],[2011.99, 9],[2012.00, 16],[2012.02, 6],[2012.04, 4],[2012.06, 4],[2012.08, 3],[2012.10, 3],[2012.12, 3],[2012.14, 3],[2012.15, 3],[2012.18, 7],[2012.20, 4],[2012.22, 3],[2012.24, 3],[2012.25, 3],[2012.27, 3],[2012.29, 3],[2012.31, 3],[2012.33, 3],[2012.35, 4],[2012.37, 4],[2012.39, 3],[2012.41, 3],[2012.42, 2],[2012.44, 2],[2012.46, 2],[2012.48, 2],[2012.50, 2],[2012.52, 2],[2012.54, 2],[2012.56, 2],[2012.58, 2],[2012.60, 2],[2012.62, 2],[2012.64, 2],[2012.65, 2],[2012.67, 3],[2012.69, 3],[2012.71, 3],[2012.73, 3],[2012.75, 3],[2012.77, 4],[2012.79, 3],[2012.81, 3],[2012.83, 6],[2012.84, 6],[2012.86, 7],[2012.88, 8],[2012.90, 12],[2012.92, 21],[2012.94, 43],[2012.96, 100],[2012.98, 8],[2013.00, 3],[2013.02, 2],[2013.04, 2],[2013.05, 1],[2013.07, 1],[2013.09, 1],[2013.11, 1],[2013.13, 1],[2013.15, 1],[2013.17, 1],[2013.19, 1],[2013.21, 1],[2013.23, 1],[2013.25, 0],[2013.27, 0],[2013.29, 0],[2013.31, 0],[2013.33, 0],[2013.35, 0],[2013.37, 0],[2013.39, 0],[2013.40, 0],[2013.42, 0],[2013.44, 0],[2013.46, 0],[2013.48, 0],[2013.50, 0],[2013.52, 0],[2013.54, 0],[2013.56, 0],[2013.58, 0],[2013.59, 0],[2013.61, 0],[2013.63, 0],[2013.65, 0],[2013.67, 0],[2013.69, 0],[2013.71, 0],[2013.73, 0],[2013.75, 0],[2013.77, 0],[2013.79, 0],[2013.80, 0],[2013.82, 0],[2013.84, 0],[2013.86, 0],[2013.88, 0],[2013.90, 0],[2013.92, 0],[2013.94, 0],[2013.96, 0],[2013.98, 0],[2014.00, 0],[2014.01, 0],[2014.03, 0],[2014.05, 0],[2014.07, 0]]);

var obama = new DataPoints('Obama',
[['Year', 'Popularity'],
[2004.01, 0],[2004.03, 0],[2004.05, 0],[2004.07, 0],[2004.09, 0],[2004.11, 0],[2004.12, 0],[2004.14, 0],[2004.16, 0],[2004.19, 0],[2004.21, 1],[2004.22, 0],[2004.24, 0],[2004.26, 0],[2004.28, 0],[2004.30, 0],[2004.32, 0],[2004.34, 0],[2004.36, 0],[2004.38, 0],[2004.40, 0],[2004.42, 1],[2004.43, 0],[2004.45, 0],[2004.47, 1],[2004.49, 0],[2004.51, 0],[2004.53, 1],[2004.55, 0],[2004.57, 12],[2004.59, 3],[2004.61, 1],[2004.62, 1],[2004.64, 0],[2004.66, 0],[2004.68, 0],[2004.70, 0],[2004.72, 0],[2004.74, 0],[2004.76, 0],[2004.78, 1],[2004.80, 1],[2004.82, 1],[2004.83, 4],[2004.85, 1],[2004.87, 0],[2004.89, 0],[2004.91, 0],[2004.93, 0],[2004.95, 0],[2004.97, 0],[2004.99, 0],[2005.01, 0],[2005.02, 0],[2005.04, 1],[2005.06, 0],[2005.08, 0],[2005.10, 0],[2005.12, 0],[2005.14, 0],[2005.16, 0],[2005.18, 0],[2005.20, 0],[2005.22, 0],[2005.24, 0],[2005.26, 0],[2005.28, 0],[2005.30, 0],[2005.32, 0],[2005.34, 0],[2005.36, 0],[2005.37, 0],[2005.39, 0],[2005.41, 0],[2005.43, 0],[2005.45, 0],[2005.47, 0],[2005.49, 0],[2005.51, 0],[2005.53, 0],[2005.55, 0],[2005.57, 0],[2005.58, 0],[2005.60, 0],[2005.62, 0],[2005.64, 0],[2005.66, 0],[2005.68, 0],[2005.70, 0],[2005.72, 0],[2005.74, 0],[2005.76, 0],[2005.77, 0],[2005.79, 0],[2005.81, 0],[2005.83, 0],[2005.85, 0],[2005.87, 0],[2005.89, 0],[2005.91, 0],[2005.93, 0],[2005.95, 0],[2005.97, 0],[2005.99, 0],[2006.00, 0],[2006.02, 0],[2006.04, 0],[2006.06, 0],[2006.08, 0],[2006.10, 1],[2006.12, 0],[2006.14, 0],[2006.15, 0],[2006.18, 0],[2006.20, 0],[2006.22, 0],[2006.24, 0],[2006.26, 0],[2006.27, 0],[2006.29, 0],[2006.31, 0],[2006.33, 0],[2006.35, 0],[2006.37, 0],[2006.39, 0],[2006.41, 0],[2006.43, 0],[2006.45, 0],[2006.47, 0],[2006.49, 0],[2006.51, 0],[2006.52, 0],[2006.54, 0],[2006.56, 0],[2006.58, 0],[2006.60, 0],[2006.62, 0],[2006.64, 0],[2006.66, 0],[2006.67, 0],[2006.69, 0],[2006.71, 0],[2006.73, 0],[2006.75, 0],[2006.77, 0],[2006.79, 2],[2006.81, 4],[2006.83, 1],[2006.85, 2],[2006.87, 1],[2006.89, 1],[2006.90, 1],[2006.92, 1],[2006.94, 3],[2006.96, 1],[2006.98, 2],[2007.00, 2],[2007.02, 2],[2007.04, 6],[2007.06, 5],[2007.08, 3],[2007.09, 3],[2007.11, 6],[2007.13, 3],[2007.15, 2],[2007.18, 2],[2007.20, 2],[2007.22, 2],[2007.24, 2],[2007.25, 2],[2007.27, 2],[2007.29, 2],[2007.31, 2],[2007.33, 2],[2007.35, 1],[2007.37, 1],[2007.39, 1],[2007.41, 1],[2007.42, 2],[2007.44, 1],[2007.46, 1],[2007.48, 1],[2007.50, 2],[2007.52, 1],[2007.54, 1],[2007.56, 2],[2007.58, 1],[2007.60, 1],[2007.62, 1],[2007.64, 1],[2007.65, 1],[2007.67, 1],[2007.69, 1],[2007.71, 1],[2007.73, 1],[2007.75, 1],[2007.77, 1],[2007.79, 2],[2007.81, 2],[2007.83, 3],[2007.84, 2],[2007.86, 2],[2007.88, 2],[2007.90, 2],[2007.92, 2],[2007.94, 3],[2007.96, 3],[2007.98, 2],[2008.00, 10],[2008.02, 19],[2008.04, 8],[2008.05, 7],[2008.07, 15],[2008.09, 22],[2008.11, 20],[2008.13, 16],[2008.15, 16],[2008.17, 13],[2008.19, 9],[2008.21, 11],[2008.23, 8],[2008.25, 7],[2008.27, 6],[2008.29, 6],[2008.30, 7],[2008.32, 6],[2008.34, 8],[2008.36, 7],[2008.38, 6],[2008.40, 5],[2008.42, 14],[2008.44, 9],[2008.46, 7],[2008.48, 6],[2008.50, 5],[2008.52, 5],[2008.54, 5],[2008.55, 7],[2008.57, 6],[2008.59, 5],[2008.61, 5],[2008.63, 10],[2008.65, 23],[2008.67, 17],[2008.69, 14],[2008.71, 13],[2008.72, 13],[2008.74, 15],[2008.76, 19],[2008.78, 21],[2008.80, 25],[2008.82, 36],[2008.84, 100],[2008.86, 28],[2008.88, 15],[2008.90, 9],[2008.92, 9],[2008.94, 8],[2008.96, 6],[2008.97, 6],[2008.99, 6],[2009.01, 8],[2009.03, 11],[2009.05, 55],[2009.07, 16],[2009.09, 10],[2009.11, 8],[2009.12, 7],[2009.14, 7],[2009.17, 6],[2009.19, 5],[2009.21, 6],[2009.23, 5],[2009.25, 6],[2009.26, 5],[2009.28, 5],[2009.30, 4],[2009.32, 4],[2009.34, 4],[2009.36, 4],[2009.38, 3],[2009.40, 3],[2009.42, 5],[2009.44, 3],[2009.46, 3],[2009.47, 3],[2009.49, 3],[2009.51, 3],[2009.53, 3],[2009.55, 3],[2009.57, 3],[2009.59, 3],[2009.61, 2],[2009.63, 3],[2009.65, 2],[2009.67, 3],[2009.68, 4],[2009.70, 4],[2009.72, 4],[2009.74, 3],[2009.76, 5],[2009.78, 4],[2009.80, 3],[2009.82, 3],[2009.84, 3],[2009.86, 3],[2009.87, 3],[2009.89, 3],[2009.91, 3],[2009.93, 3],[2009.95, 3],[2009.97, 2],[2009.99, 2],[2010.01, 3],[2010.03, 3],[2010.05, 3],[2010.07, 3],[2010.08, 3],[2010.10, 3],[2010.12, 3],[2010.14, 3],[2010.16, 2],[2010.19, 2],[2010.21, 2],[2010.22, 3],[2010.24, 2],[2010.26, 2],[2010.28, 3],[2010.30, 2],[2010.32, 3],[2010.34, 3],[2010.36, 2],[2010.38, 2],[2010.40, 2],[2010.42, 2],[2010.43, 2],[2010.45, 2],[2010.47, 2],[2010.49, 2],[2010.51, 2],[2010.53, 1],[2010.55, 2],[2010.57, 2],[2010.59, 2],[2010.61, 2],[2010.62, 2],[2010.64, 2],[2010.66, 2],[2010.68, 2],[2010.70, 2],[2010.72, 2],[2010.74, 2],[2010.76, 2],[2010.78, 2],[2010.80, 2],[2010.82, 2],[2010.83, 3],[2010.85, 3],[2010.87, 2],[2010.89, 2],[2010.91, 2],[2010.93, 2],[2010.95, 2],[2010.97, 1],[2010.99, 1],[2011.01, 2],[2011.02, 2],[2011.04, 2],[2011.06, 2],[2011.08, 2],[2011.10, 2],[2011.12, 2],[2011.14, 2],[2011.16, 2],[2011.18, 2],[2011.20, 2],[2011.22, 3],[2011.24, 2],[2011.26, 2],[2011.28, 2],[2011.30, 2],[2011.32, 3],[2011.34, 5],[2011.36, 3],[2011.37, 2],[2011.39, 4],[2011.41, 2],[2011.43, 2],[2011.45, 2],[2011.47, 2],[2011.49, 1],[2011.51, 2],[2011.53, 1],[2011.55, 1],[2011.57, 2],[2011.58, 3],[2011.60, 2],[2011.62, 2],[2011.64, 1],[2011.66, 1],[2011.68, 2],[2011.70, 2],[2011.72, 2],[2011.74, 2],[2011.76, 2],[2011.77, 2],[2011.79, 2],[2011.81, 2],[2011.83, 2],[2011.85, 2],[2011.87, 2],[2011.89, 2],[2011.91, 2],[2011.93, 2],[2011.95, 2],[2011.97, 2],[2011.99, 1],[2012.00, 2],[2012.02, 2],[2012.04, 2],[2012.06, 3],[2012.08, 2],[2012.10, 2],[2012.12, 2],[2012.14, 3],[2012.15, 2],[2012.18, 2],[2012.20, 2],[2012.22, 2],[2012.24, 2],[2012.25, 2],[2012.27, 2],[2012.29, 2],[2012.31, 2],[2012.33, 2],[2012.35, 3],[2012.37, 3],[2012.39, 2],[2012.41, 2],[2012.42, 2],[2012.44, 2],[2012.46, 2],[2012.48, 2],[2012.50, 2],[2012.52, 2],[2012.54, 2],[2012.56, 2],[2012.58, 3],[2012.60, 2],[2012.62, 2],[2012.64, 2],[2012.65, 4],[2012.67, 7],[2012.69, 4],[2012.71, 4],[2012.73, 4],[2012.75, 5],[2012.77, 4],[2012.79, 6],[2012.81, 7],[2012.83, 6],[2012.84, 27],[2012.86, 5],[2012.88, 3],[2012.90, 3],[2012.92, 2],[2012.94, 3],[2012.96, 3],[2012.98, 2],[2013.00, 2],[2013.02, 2],[2013.04, 2],[2013.05, 6],[2013.07, 3],[2013.09, 2],[2013.11, 3],[2013.13, 2],[2013.15, 2],[2013.17, 2],[2013.19, 2],[2013.21, 2],[2013.23, 2],[2013.25, 2],[2013.27, 2],[2013.29, 2],[2013.31, 2],[2013.33, 2],[2013.35, 2],[2013.37, 2],[2013.39, 2],[2013.40, 1],[2013.42, 2],[2013.44, 2],[2013.46, 2],[2013.48, 2],[2013.50, 2],[2013.52, 1],[2013.54, 2],[2013.56, 1],[2013.58, 1],[2013.59, 2],[2013.61, 1],[2013.63, 1],[2013.65, 2],[2013.67, 2],[2013.69, 2],[2013.71, 2],[2013.73, 2],[2013.75, 2],[2013.77, 2],[2013.79, 2],[2013.80, 2],[2013.82, 2],[2013.84, 2],[2013.86, 2],[2013.88, 2],[2013.90, 2],[2013.92, 2],[2013.94, 3],[2013.96, 2],[2013.98, 2],[2014.00, 2],[2014.01, 2],[2014.03, 2],[2014.05, 2],[2014.07, 2],]);

var olympics = new DataPoints('Olympics',
[['Year', 'Popularity'],
[2004.01, 2],[2004.03, 2],[2004.05, 2],[2004.07, 2],[2004.09, 2],[2004.11, 2],[2004.12, 2],[2004.14, 2],[2004.16, 2],[2004.19, 2],[2004.21, 2],[2004.22, 2],[2004.24, 2],[2004.26, 2],[2004.28, 2],[2004.30, 2],[2004.32, 2],[2004.34, 2],[2004.36, 2],[2004.38, 3],[2004.40, 2],[2004.42, 2],[2004.43, 3],[2004.45, 2],[2004.47, 3],[2004.49, 3],[2004.51, 3],[2004.53, 4],[2004.55, 4],[2004.57, 5],[2004.59, 7],[2004.61, 24],[2004.62, 57],[2004.64, 39],[2004.66, 14],[2004.68, 5],[2004.70, 3],[2004.72, 2],[2004.74, 2],[2004.76, 2],[2004.78, 2],[2004.80, 2],[2004.82, 1],[2004.83, 1],[2004.85, 1],[2004.87, 1],[2004.89, 1],[2004.91, 1],[2004.93, 1],[2004.95, 1],[2004.97, 1],[2004.99, 1],[2005.01, 1],[2005.02, 1],[2005.04, 1],[2005.06, 1],[2005.08, 1],[2005.10, 1],[2005.12, 1],[2005.14, 1],[2005.16, 1],[2005.18, 1],[2005.20, 1],[2005.22, 1],[2005.24, 1],[2005.26, 1],[2005.28, 1],[2005.30, 1],[2005.32, 1],[2005.34, 1],[2005.36, 1],[2005.37, 1],[2005.39, 1],[2005.41, 1],[2005.43, 1],[2005.45, 1],[2005.47, 1],[2005.49, 1],[2005.51, 5],[2005.53, 2],[2005.55, 1],[2005.57, 1],[2005.58, 1],[2005.60, 1],[2005.62, 1],[2005.64, 1],[2005.66, 1],[2005.68, 1],[2005.70, 1],[2005.72, 1],[2005.74, 1],[2005.76, 1],[2005.77, 1],[2005.79, 1],[2005.81, 1],[2005.83, 1],[2005.85, 1],[2005.87, 1],[2005.89, 1],[2005.91, 1],[2005.93, 1],[2005.95, 1],[2005.97, 2],[2005.99, 2],[2006.00, 2],[2006.02, 2],[2006.04, 3],[2006.06, 3],[2006.08, 4],[2006.10, 12],[2006.12, 28],[2006.14, 24],[2006.15, 8],[2006.18, 2],[2006.20, 2],[2006.22, 1],[2006.24, 1],[2006.26, 1],[2006.27, 1],[2006.29, 1],[2006.31, 1],[2006.33, 1],[2006.35, 1],[2006.37, 1],[2006.39, 1],[2006.41, 1],[2006.43, 1],[2006.45, 1],[2006.47, 1],[2006.49, 1],[2006.51, 1],[2006.52, 1],[2006.54, 1],[2006.56, 1],[2006.58, 1],[2006.60, 1],[2006.62, 1],[2006.64, 1],[2006.66, 1],[2006.67, 1],[2006.69, 1],[2006.71, 1],[2006.73, 1],[2006.75, 1],[2006.77, 1],[2006.79, 1],[2006.81, 1],[2006.83, 1],[2006.85, 1],[2006.87, 1],[2006.89, 1],[2006.90, 1],[2006.92, 1],[2006.94, 1],[2006.96, 1],[2006.98, 1],[2007.00, 1],[2007.02, 1],[2007.04, 1],[2007.06, 1],[2007.08, 1],[2007.09, 1],[2007.11, 1],[2007.13, 1],[2007.15, 1],[2007.18, 1],[2007.20, 1],[2007.22, 1],[2007.24, 1],[2007.25, 1],[2007.27, 1],[2007.29, 1],[2007.31, 1],[2007.33, 1],[2007.35, 1],[2007.37, 1],[2007.39, 1],[2007.41, 1],[2007.42, 2],[2007.44, 1],[2007.46, 1],[2007.48, 1],[2007.50, 1],[2007.52, 1],[2007.54, 1],[2007.56, 1],[2007.58, 1],[2007.60, 1],[2007.62, 1],[2007.64, 1],[2007.65, 1],[2007.67, 1],[2007.69, 1],[2007.71, 1],[2007.73, 1],[2007.75, 1],[2007.77, 1],[2007.79, 1],[2007.81, 1],[2007.83, 1],[2007.84, 1],[2007.86, 1],[2007.88, 2],[2007.90, 2],[2007.92, 2],[2007.94, 2],[2007.96, 2],[2007.98, 2],[2008.00, 2],[2008.02, 2],[2008.04, 2],[2008.05, 2],[2008.07, 2],[2008.09, 2],[2008.11, 2],[2008.13, 2],[2008.15, 2],[2008.17, 2],[2008.19, 2],[2008.21, 2],[2008.23, 2],[2008.25, 2],[2008.27, 2],[2008.29, 2],[2008.30, 2],[2008.32, 2],[2008.34, 2],[2008.36, 2],[2008.38, 2],[2008.40, 2],[2008.42, 2],[2008.44, 2],[2008.46, 2],[2008.48, 3],[2008.50, 3],[2008.52, 3],[2008.54, 3],[2008.55, 4],[2008.57, 5],[2008.59, 30],[2008.61, 77],[2008.63, 53],[2008.65, 16],[2008.67, 4],[2008.69, 3],[2008.71, 3],[2008.72, 2],[2008.74, 2],[2008.76, 2],[2008.78, 2],[2008.80, 2],[2008.82, 1],[2008.84, 1],[2008.86, 1],[2008.88, 1],[2008.90, 1],[2008.92, 1],[2008.94, 2],[2008.96, 1],[2008.97, 1],[2008.99, 1],[2009.01, 1],[2009.03, 1],[2009.05, 1],[2009.07, 1],[2009.09, 1],[2009.11, 1],[2009.12, 1],[2009.14, 1],[2009.17, 1],[2009.19, 1],[2009.21, 2],[2009.23, 1],[2009.25, 1],[2009.26, 1],[2009.28, 1],[2009.30, 1],[2009.32, 1],[2009.34, 1],[2009.36, 1],[2009.38, 1],[2009.40, 1],[2009.42, 1],[2009.44, 1],[2009.46, 1],[2009.47, 1],[2009.49, 1],[2009.51, 1],[2009.53, 1],[2009.55, 1],[2009.57, 1],[2009.59, 1],[2009.61, 1],[2009.63, 1],[2009.65, 1],[2009.67, 1],[2009.68, 1],[2009.70, 1],[2009.72, 1],[2009.74, 4],[2009.76, 2],[2009.78, 1],[2009.80, 1],[2009.82, 1],[2009.84, 1],[2009.86, 1],[2009.87, 1],[2009.89, 2],[2009.91, 2],[2009.93, 2],[2009.95, 2],[2009.97, 1],[2009.99, 2],[2010.01, 2],[2010.03, 3],[2010.05, 3],[2010.07, 3],[2010.08, 4],[2010.10, 18],[2010.12, 40],[2010.14, 32],[2010.16, 13],[2010.19, 2],[2010.21, 2],[2010.22, 2],[2010.24, 1],[2010.26, 1],[2010.28, 1],[2010.30, 1],[2010.32, 1],[2010.34, 1],[2010.36, 1],[2010.38, 1],[2010.40, 1],[2010.42, 1],[2010.43, 1],[2010.45, 1],[2010.47, 1],[2010.49, 1],[2010.51, 1],[2010.53, 1],[2010.55, 1],[2010.57, 1],[2010.59, 1],[2010.61, 1],[2010.62, 1],[2010.64, 1],[2010.66, 1],[2010.68, 1],[2010.70, 1],[2010.72, 1],[2010.74, 1],[2010.76, 1],[2010.78, 1],[2010.80, 1],[2010.82, 1],[2010.83, 1],[2010.85, 1],[2010.87, 1],[2010.89, 1],[2010.91, 1],[2010.93, 1],[2010.95, 1],[2010.97, 1],[2010.99, 1],[2011.01, 1],[2011.02, 1],[2011.04, 1],[2011.06, 1],[2011.08, 1],[2011.10, 1],[2011.12, 1],[2011.14, 1],[2011.16, 1],[2011.18, 1],[2011.20, 1],[2011.22, 1],[2011.24, 1],[2011.26, 1],[2011.28, 1],[2011.30, 1],[2011.32, 2],[2011.34, 1],[2011.36, 1],[2011.37, 1],[2011.39, 1],[2011.41, 1],[2011.43, 1],[2011.45, 1],[2011.47, 2],[2011.49, 1],[2011.51, 1],[2011.53, 1],[2011.55, 1],[2011.57, 1],[2011.58, 1],[2011.60, 1],[2011.62, 1],[2011.64, 1],[2011.66, 1],[2011.68, 1],[2011.70, 1],[2011.72, 1],[2011.74, 1],[2011.76, 1],[2011.77, 1],[2011.79, 1],[2011.81, 1],[2011.83, 1],[2011.85, 1],[2011.87, 1],[2011.89, 1],[2011.91, 1],[2011.93, 1],[2011.95, 1],[2011.97, 1],[2011.99, 1],[2012.00, 2],[2012.02, 2],[2012.04, 2],[2012.06, 2],[2012.08, 2],[2012.10, 1],[2012.12, 1],[2012.14, 2],[2012.15, 2],[2012.18, 2],[2012.20, 2],[2012.22, 2],[2012.24, 2],[2012.25, 2],[2012.27, 2],[2012.29, 2],[2012.31, 2],[2012.33, 3],[2012.35, 3],[2012.37, 3],[2012.39, 3],[2012.41, 3],[2012.42, 3],[2012.44, 4],[2012.46, 4],[2012.48, 6],[2012.50, 6],[2012.52, 7],[2012.54, 9],[2012.56, 51],[2012.58, 100],[2012.60, 84],[2012.62, 30],[2012.64, 4],[2012.65, 4],[2012.67, 4],[2012.69, 3],[2012.71, 2],[2012.73, 2],[2012.75, 2],[2012.77, 2],[2012.79, 2],[2012.81, 1],[2012.83, 1],[2012.84, 1],[2012.86, 1],[2012.88, 1],[2012.90, 1],[2012.92, 1],[2012.94, 1],[2012.96, 1],[2012.98, 1],[2013.00, 1],[2013.02, 1],[2013.04, 1],[2013.05, 1],[2013.07, 1],[2013.09, 1],[2013.11, 1],[2013.13, 1],[2013.15, 1],[2013.17, 1],[2013.19, 1],[2013.21, 1],[2013.23, 1],[2013.25, 1],[2013.27, 1],[2013.29, 1],[2013.31, 1],[2013.33, 1],[2013.35, 1],[2013.37, 1],[2013.39, 1],[2013.40, 1],[2013.42, 1],[2013.44, 1],[2013.46, 1],[2013.48, 1],[2013.50, 1],[2013.52, 1],[2013.54, 1],[2013.56, 1],[2013.58, 1],[2013.59, 1],[2013.61, 1],[2013.63, 1],[2013.65, 1],[2013.67, 1],[2013.69, 1],[2013.71, 1],[2013.73, 1],[2013.75, 1],[2013.77, 1],[2013.79, 1],[2013.80, 1],[2013.82, 1],[2013.84, 1],[2013.86, 1],[2013.88, 1],[2013.90, 1],[2013.92, 1],[2013.94, 1],[2013.96, 1],[2013.98, 1],[2014.00, 2],[2014.01, 2],[2014.03, 2],[2014.05, 3],[2014.07, 3],]);

var royal_wedding = new DataPoints('Royal Wedding',
[['Year', 'Popularity'],
[2004.01, 0],[2004.03, 0],[2004.05, 0],[2004.07, 0],[2004.09, 0],[2004.11, 0],[2004.12, 0],[2004.14, 0],[2004.16, 0],[2004.19, 0],[2004.21, 0],[2004.22, 0],[2004.24, 0],[2004.26, 0],[2004.28, 0],[2004.30, 0],[2004.32, 0],[2004.34, 0],[2004.36, 1],[2004.38, 1],[2004.40, 1],[2004.42, 0],[2004.43, 0],[2004.45, 0],[2004.47, 0],[2004.49, 0],[2004.51, 0],[2004.53, 0],[2004.55, 0],[2004.57, 0],[2004.59, 0],[2004.61, 0],[2004.62, 0],[2004.64, 0],[2004.66, 0],[2004.68, 0],[2004.70, 0],[2004.72, 0],[2004.74, 0],[2004.76, 0],[2004.78, 0],[2004.80, 0],[2004.82, 0],[2004.83, 0],[2004.85, 0],[2004.87, 0],[2004.89, 0],[2004.91, 0],[2004.93, 0],[2004.95, 0],[2004.97, 0],[2004.99, 0],[2005.01, 0],[2005.02, 0],[2005.04, 0],[2005.06, 0],[2005.08, 0],[2005.10, 0],[2005.12, 0],[2005.14, 0],[2005.16, 0],[2005.18, 0],[2005.20, 0],[2005.22, 0],[2005.24, 0],[2005.26, 2],[2005.28, 2],[2005.30, 0],[2005.32, 0],[2005.34, 0],[2005.36, 0],[2005.37, 0],[2005.39, 0],[2005.41, 0],[2005.43, 0],[2005.45, 0],[2005.47, 0],[2005.49, 0],[2005.51, 0],[2005.53, 0],[2005.55, 0],[2005.57, 0],[2005.58, 0],[2005.60, 0],[2005.62, 0],[2005.64, 0],[2005.66, 0],[2005.68, 0],[2005.70, 0],[2005.72, 0],[2005.74, 0],[2005.76, 0],[2005.77, 0],[2005.79, 0],[2005.81, 0],[2005.83, 0],[2005.85, 0],[2005.87, 0],[2005.89, 0],[2005.91, 0],[2005.93, 0],[2005.95, 0],[2005.97, 0],[2005.99, 0],[2006.00, 0],[2006.02, 0],[2006.04, 0],[2006.06, 0],[2006.08, 0],[2006.10, 0],[2006.12, 0],[2006.14, 0],[2006.15, 0],[2006.18, 0],[2006.20, 0],[2006.22, 0],[2006.24, 0],[2006.26, 0],[2006.27, 0],[2006.29, 0],[2006.31, 0],[2006.33, 0],[2006.35, 0],[2006.37, 0],[2006.39, 0],[2006.41, 0],[2006.43, 0],[2006.45, 0],[2006.47, 0],[2006.49, 0],[2006.51, 0],[2006.52, 0],[2006.54, 0],[2006.56, 0],[2006.58, 0],[2006.60, 0],[2006.62, 0],[2006.64, 0],[2006.66, 0],[2006.67, 0],[2006.69, 0],[2006.71, 0],[2006.73, 0],[2006.75, 0],[2006.77, 0],[2006.79, 0],[2006.81, 0],[2006.83, 0],[2006.85, 0],[2006.87, 0],[2006.89, 0],[2006.90, 0],[2006.92, 0],[2006.94, 0],[2006.96, 0],[2006.98, 0],[2007.00, 0],[2007.02, 0],[2007.04, 0],[2007.06, 0],[2007.08, 0],[2007.09, 0],[2007.11, 0],[2007.13, 0],[2007.15, 0],[2007.18, 0],[2007.20, 0],[2007.22, 0],[2007.24, 0],[2007.25, 0],[2007.27, 0],[2007.29, 0],[2007.31, 0],[2007.33, 0],[2007.35, 0],[2007.37, 0],[2007.39, 0],[2007.41, 0],[2007.42, 0],[2007.44, 0],[2007.46, 0],[2007.48, 0],[2007.50, 0],[2007.52, 0],[2007.54, 0],[2007.56, 0],[2007.58, 0],[2007.60, 0],[2007.62, 0],[2007.64, 0],[2007.65, 0],[2007.67, 0],[2007.69, 0],[2007.71, 0],[2007.73, 0],[2007.75, 0],[2007.77, 0],[2007.79, 0],[2007.81, 0],[2007.83, 0],[2007.84, 0],[2007.86, 0],[2007.88, 0],[2007.90, 0],[2007.92, 0],[2007.94, 0],[2007.96, 0],[2007.98, 0],[2008.00, 0],[2008.02, 0],[2008.04, 0],[2008.05, 0],[2008.07, 0],[2008.09, 0],[2008.11, 0],[2008.13, 0],[2008.15, 0],[2008.17, 0],[2008.19, 0],[2008.21, 0],[2008.23, 0],[2008.25, 0],[2008.27, 0],[2008.29, 0],[2008.30, 0],[2008.32, 0],[2008.34, 0],[2008.36, 0],[2008.38, 0],[2008.40, 0],[2008.42, 0],[2008.44, 0],[2008.46, 0],[2008.48, 0],[2008.50, 0],[2008.52, 0],[2008.54, 0],[2008.55, 0],[2008.57, 0],[2008.59, 0],[2008.61, 0],[2008.63, 0],[2008.65, 0],[2008.67, 0],[2008.69, 0],[2008.71, 0],[2008.72, 0],[2008.74, 0],[2008.76, 0],[2008.78, 0],[2008.80, 0],[2008.82, 0],[2008.84, 0],[2008.86, 0],[2008.88, 0],[2008.90, 0],[2008.92, 0],[2008.94, 0],[2008.96, 0],[2008.97, 0],[2008.99, 0],[2009.01, 0],[2009.03, 0],[2009.05, 0],[2009.07, 0],[2009.09, 0],[2009.11, 0],[2009.12, 0],[2009.14, 0],[2009.17, 0],[2009.19, 0],[2009.21, 0],[2009.23, 0],[2009.25, 0],[2009.26, 0],[2009.28, 0],[2009.30, 0],[2009.32, 0],[2009.34, 0],[2009.36, 0],[2009.38, 0],[2009.40, 0],[2009.42, 0],[2009.44, 0],[2009.46, 0],[2009.47, 0],[2009.49, 0],[2009.51, 0],[2009.53, 0],[2009.55, 0],[2009.57, 0],[2009.59, 0],[2009.61, 0],[2009.63, 0],[2009.65, 0],[2009.67, 0],[2009.68, 0],[2009.70, 0],[2009.72, 0],[2009.74, 0],[2009.76, 0],[2009.78, 0],[2009.80, 0],[2009.82, 0],[2009.84, 0],[2009.86, 0],[2009.87, 0],[2009.89, 0],[2009.91, 0],[2009.93, 0],[2009.95, 0],[2009.97, 0],[2009.99, 0],[2010.01, 0],[2010.03, 0],[2010.05, 0],[2010.07, 0],[2010.08, 0],[2010.10, 0],[2010.12, 0],[2010.14, 0],[2010.16, 0],[2010.19, 0],[2010.21, 0],[2010.22, 0],[2010.24, 0],[2010.26, 0],[2010.28, 0],[2010.30, 0],[2010.32, 0],[2010.34, 0],[2010.36, 0],[2010.38, 0],[2010.40, 0],[2010.42, 0],[2010.43, 0],[2010.45, 0],[2010.47, 0],[2010.49, 0],[2010.51, 0],[2010.53, 0],[2010.55, 0],[2010.57, 0],[2010.59, 0],[2010.61, 0],[2010.62, 0],[2010.64, 0],[2010.66, 0],[2010.68, 0],[2010.70, 0],[2010.72, 0],[2010.74, 0],[2010.76, 0],[2010.78, 0],[2010.80, 0],[2010.82, 0],[2010.83, 0],[2010.85, 0],[2010.87, 1],[2010.89, 1],[2010.91, 0],[2010.93, 0],[2010.95, 0],[2010.97, 0],[2010.99, 0],[2011.01, 1],[2011.02, 1],[2011.04, 1],[2011.06, 1],[2011.08, 1],[2011.10, 1],[2011.12, 1],[2011.14, 1],[2011.16, 1],[2011.18, 1],[2011.20, 1],[2011.22, 2],[2011.24, 3],[2011.26, 3],[2011.28, 5],[2011.30, 11],[2011.32, 100],[2011.34, 21],[2011.36, 4],[2011.37, 2],[2011.39, 2],[2011.41, 1],[2011.43, 1],[2011.45, 1],[2011.47, 1],[2011.49, 1],[2011.51, 1],[2011.53, 1],[2011.55, 1],[2011.57, 1],[2011.58, 1],[2011.60, 1],[2011.62, 0],[2011.64, 0],[2011.66, 0],[2011.68, 0],[2011.70, 0],[2011.72, 0],[2011.74, 0],[2011.76, 0],[2011.77, 0],[2011.79, 0],[2011.81, 0],[2011.83, 0],[2011.85, 0],[2011.87, 0],[2011.89, 0],[2011.91, 0],[2011.93, 0],[2011.95, 0],[2011.97, 0],[2011.99, 0],[2012.00, 0],[2012.02, 0],[2012.04, 0],[2012.06, 0],[2012.08, 0],[2012.10, 0],[2012.12, 0],[2012.14, 0],[2012.15, 0],[2012.18, 0],[2012.20, 0],[2012.22, 0],[2012.24, 0],[2012.25, 0],[2012.27, 0],[2012.29, 0],[2012.31, 0],[2012.33, 0],[2012.35, 0],[2012.37, 0],[2012.39, 0],[2012.41, 0],[2012.42, 0],[2012.44, 0],[2012.46, 0],[2012.48, 0],[2012.50, 0],[2012.52, 0],[2012.54, 0],[2012.56, 0],[2012.58, 0],[2012.60, 0],[2012.62, 0],[2012.64, 0],[2012.65, 0],[2012.67, 0],[2012.69, 0],[2012.71, 0],[2012.73, 0],[2012.75, 0],[2012.77, 0],[2012.79, 0],[2012.81, 0],[2012.83, 0],[2012.84, 0],[2012.86, 0],[2012.88, 0],[2012.90, 0],[2012.92, 0],[2012.94, 0],[2012.96, 0],[2012.98, 0],[2013.00, 0],[2013.02, 0],[2013.04, 0],[2013.05, 0],[2013.07, 0],[2013.09, 0],[2013.11, 0],[2013.13, 0],[2013.15, 0],[2013.17, 0],[2013.19, 0],[2013.21, 0],[2013.23, 0],[2013.25, 0],[2013.27, 0],[2013.29, 0],[2013.31, 0],[2013.33, 0],[2013.35, 0],[2013.37, 0],[2013.39, 0],[2013.40, 0],[2013.42, 0],[2013.44, 0],[2013.46, 0],[2013.48, 0],[2013.50, 0],[2013.52, 0],[2013.54, 0],[2013.56, 0],[2013.58, 0],[2013.59, 0],[2013.61, 0],[2013.63, 0],[2013.65, 0],[2013.67, 0],[2013.69, 0],[2013.71, 0],[2013.73, 0],[2013.75, 0],[2013.77, 0],[2013.79, 0],[2013.80, 0],[2013.82, 0],[2013.84, 0],[2013.86, 0],[2013.88, 0],[2013.90, 0],[2013.92, 0],[2013.94, 0],[2013.96, 0],[2013.98, 0],[2014.00, 0],[2014.01, 0],[2014.03, 0],[2014.05, 0],[2014.07, 0]]);

var topicsArray = [global_warming,
mayan_calendar,
obama,
olympics,
royal_wedding];

//first element = date of first search, 2nd = date of peak
var graphInfoArray = [
['January 4, 2004', 'March 11, 2007'],
['January 4, 2004', 'December 16, 2012'],
['March 14, 2004', 'November 2, 2008'],
['January 4, 2004', 'July 29, 2012'],
['May 9, 2004', 'April 24, 2011']];

