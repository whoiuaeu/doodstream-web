import React from "react";

const Center = ({ children }: { children: React.ReactNode }) => {
    return (  
        <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.freepik.com%2Ffree-vector%2Fweb-banners-template-set-with-text-space_1017-30732.jpg&tbnid=yUynvSAnEmtdvM&vet=12ahUKEwik8bD5-ueEAxWx1zgGHfjDCwUQMygBegQIARBR..i&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fwebsite-banner&docid=u0TyUOIAXHD2ZM&w=626&h=514&q=banner&ved=2ahUKEwik8bD5-ueEAxWx1zgGHfjDCwUQMygBegQIARBR">
        <div className="flex flex-col h-[50vh] justify-center items-center">
            {children}
        </div>
    );
};

export default Center;
