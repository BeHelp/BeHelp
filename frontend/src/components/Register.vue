<template>
    <section class="">
        <div class="registration">
            <div class="registration__image">
                <img src="img/Rectangle26.png" alt="Girl in a jacket">
            </div>
        <div class="registration__form">
            <div class="title">
            <h1>REGISTRATION FORM</h1>
        </div>
            <div class="registration__form-foto">
            </div>
            <div class="registration__form-short">
                <input class="input" type="text" placeholder="First name" required />
                <input class="input" type="text" placeholder="Last name" required />
                    
                <div class="registration__form-radio">
                        <label for="status">Status</label>
                        <div class="registration__form-radio-item">
                            <input type="radio" name="status"/>
                            <label for="newcomer">Newcomer</label>
                        </div>
                        <div class="registration__form-radio-item">
                            <input type="radio" name="status"/>
                            <label for="volunteer">Volunteer</label>
                        </div>
                    </div>
                        <div class="registration__form-short-row">
                            <input type="text" placeholder="Post code" required />
                            <input type="text" placeholder="City" required />
                        </div>
                </div>
                <div class="registration__form-long">
                    <input type="text" placeholder="E-mail" required />
                    <input type="text" placeholder="Password" required />
                    <div class="registration__form-radio">
                        <label for="gender">Gender</label>
                        <div class="registration__form-radio-item">
                            <input type="radio" name="Gender"/>
                            <label for="male">Male</label>
                        </div>
                        
                        <div class="registration__form-radio-item">
                            <input type="radio" name="Gender"/>
                            <label for="female">Female</label>
                        </div>
                        <div class="registration__form-radio-item">
                            <input type="radio" name="Gender"/>
                            <label for="other">Other</label>
                        </div>
                    </div>

                    <div class="registration__form-options">
                        <select  placeholder="Nationality">
                            <option value="Nationality1">Nationality1</option>
                            <option value="Nationality2">Nationality2</option>
                            <option value="Nationality3">Nationality3</option>
                        </select>
                    </div>
                    <div class="registration__form-options">
                        <select  placeholder="Languages">
                            <option value="english">English</option>
                            <option value="dutch">Dutch</option>
                            <option value="french">French</option>
                        </select>
                    </div>
                    <div class="registration__form-options">
                        <select  placeholder="Skills">
                            <option value="skill1">skill1</option>
                            <option value="skill2">skill2</option>
                            <option value="skill3">skill3</option>
                        </select>
                    </div>

                    <input type="text" placeholder="Description" required />
                    
                    <div class="registration__form-button">
                        <button class="btn">SEND</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<style>
@import '../components/styles/layout/_register.scss';
</style>
