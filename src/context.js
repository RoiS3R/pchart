/*
    Copyright (C) 2019  Ermanno Scanagatta

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
import React from "react";

export const StoreContext = React.createContext();

const defaultTheme = {
  backgroundColor: "transparent",
  backdropFill: "#FFFDE7",
  axisColor: "#707070",
  gridColor: "#FFD54F",
  areaColor: "rgba(127,127,127, .3)",
};

export const ThemeContext = React.createContext({ value: defaultTheme });

export default StoreContext;
