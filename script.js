function spinWheel() {
    let wheel = document.getElementById("wheel");
    let rotation = 1440 + (360 - 60); // 60° pe 40% discount hamesha rahega
    wheel.style.transform = `rotate(${rotation}deg)`;

    setTimeout(() => {
        alert("🎉 Congratulations! You got 40% OFF! On Our Dominator Batch...Fill Out This Form To Avail The Discount 🎉");
        window.location.href = "https://forms.gle/bpeacnFB19YZnpKr9"; // Google Form ka link yahan paste karo
    }, 4000);
}
